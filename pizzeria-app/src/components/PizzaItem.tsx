import React, { useContext, useState } from "react";
import { PizzaContext } from "../App.js";

const PizzaItem = ({ title, price, image, item }) => {

  const {cartItems, setCartItems} = useContext(PizzaContext);

  function addToCart(item){
    setCartItems([...cartItems, item])
    console.log(cartItems);
  }

  const sizes = ["26 cm", "30 cm", "40 cm"];
  const [selectedSize, setSelectedSize] = useState(0);

  const thicknesses = ["thin", "standart"];
  const [selectedThickness, setSelectedThickness] = useState(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={image} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
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
          <div className="pizza-block__price">${price}</div>
          <div className="button button--outline button--add" onClick={() => addToCart(item)}>  <span>Add</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
