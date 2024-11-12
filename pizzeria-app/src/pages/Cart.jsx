import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../App";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cartItems, setCartItems, totalCartQuantity, cartTotal} = useContext(PizzaContext);

  function clearCart(){
    setCartItems([])
  }

  function deleteItem(id){
    const updatedCartItems = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCartItems)
  }

  function plusItemQuantity(id){
    const updatedCartItems = cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity+=1} : item)
    setCartItems(updatedCartItems)
  }
  
  function minusItemQuantity(id){
    const updatedCartItems = cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity-=1} : item).filter(item => item.quantity > 0)
    setCartItems(updatedCartItems)
  }


  return (
    <div class="container container--cart">
    <div class="cart">
      <div class="cart__top">
        <h3 class="content__title">
          <img className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"/>
          Cart
        </h3>
        <div class="cart__clear" onClick={() => clearCart()}>
        <img className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/7078/7078826.png"/>
          <span>Clear cart</span>
        </div>
      </div>
      <div class="content__items">

      {/* cart items */}
      {cartItems.map((item) => (
        <div class="cart__item">
          <div class="cart__item-img">
            <img
              class="pizza-block__image"
              src={item.image}
              alt="Pizza"
            />
          </div>
          <div class="cart__item-info">
            <h3>{item.title}</h3>
            <p>thin crust, 26 cm</p>
          </div>
        
          <div className="plus_count_minus">
            <div>
              <img onClick={() => minusItemQuantity(item.id)} className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/15795/15795911.png"/>
            </div>
            <div style={{marginBottom: '5px', fontSize: '25px'}}><b>{item.quantity}</b></div>
            <div>
              <img onClick={() => plusItemQuantity(item.id)} className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"/>
            </div>
          </div>
          
          <div class="cart__item-price">
            <b>${item.price*item.quantity}</b>
          </div>
          <div class="cart__item-remove">
          <img onClick={()=> deleteItem(item.id)} className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/1450/1450571.png"/>
          </div>
        </div>
      ))}
      {/* cart items */}


      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span>Amount: <b>{totalCartQuantity}</b></span>
          <span>Cart total: <b>${cartTotal}</b>{" "}</span>
        </div>
        <div class="cart__bottom-buttons">
          <Link to={'/'}>
          <a href="/" class="button button--outline button--add go-back-btn">
            <span>Get back</span>
          </a>
          </Link>

          <Link to={'/checkout'}>
            <div class="button pay-btn">
              <Link to={'/checkout'}><span>Pay now</span></Link>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
