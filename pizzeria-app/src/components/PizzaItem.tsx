import React, { useContext, useState } from "react";
import { PizzaContext } from "../App.js";

export const sizes = ["26 cm", "30 cm", "40 cm"];
export const thicknesses = ["thin", "standart"];

const PizzaItem = ({item }) => {

  const {cartItems, setCartItems} = useContext(PizzaContext);

  function addToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1, selectedThickness, selectedSize }: cartItem );
      setCartItems(updatedCartItems);
    } else {
      const itemWithQuantity = { ...item, quantity: 1, selectedThickness, selectedSize };
      setCartItems([...cartItems, itemWithQuantity]);
    }
    
    console.log(cartItems);
  }
  

  const [selectedSize, setSelectedSize] = useState(0);

  const [selectedThickness, setSelectedThickness] = useState(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={item.image} />
        <h4 className="pizza-block__title">{item.title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {thicknesses.map((thickness, id) => (
              <li
                onClick={() => setSelectedThickness(id)}
                className={selectedThickness === id ? "active" : ""}
              >
                {thickness}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, id) => (
              <li onClick={() => setSelectedSize(id)} className={selectedSize === id ? "active" : ""} >{size}</li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">${item.price}</div>
          <div className="button button--outline button--add" onClick={() => addToCart(item)}>  <span>Add</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
