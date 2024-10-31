import React from "react";

const Cart = () => {
  return (
    <div class="container container--cart">
    <div class="cart">
      <div class="cart__top">
        <h3 class="content__title">
          <img className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"/>
          Cart
        </h3>
        <div class="cart__clear">
        <img className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/7078/7078826.png"/>
          <span>Clear items</span>
        </div>
      </div>
      <div class="content__items">
        {/* cart item */}
        <div class="cart__item">
          <div class="cart__item-img">
            <img
              class="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div class="cart__item-info">
            <h3>Pepperoni Hot</h3>
            <p>thin crust, 26 cm</p>
          </div>

          <div className="plus_count_minus">
            <div>
              <img className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/15795/15795911.png"/>
            </div>
            <div style={{marginBottom: '5px', fontSize: '25px'}}><b>2</b></div>
            <div>
              <img className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"/>
            </div>
          </div>
          
          <div class="cart__item-price">
            <b>$24.99</b>
          </div>
          <div class="cart__item-remove">
          <img className='cart_icon' src="https://cdn-icons-png.flaticon.com/128/1828/1828945.png"/>
          </div>
        </div>
        {/* end of cart item */}

      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span>Amount: <b>2</b></span>
          <span>Cart total: <b>$28.98</b>{" "}</span>
        </div>
        <div class="cart__bottom-buttons">
          <a href="/" class="button button--outline button--add go-back-btn">
            <span>Get back</span>
          </a>
          <div class="button pay-btn">
            <span>Pay now</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
