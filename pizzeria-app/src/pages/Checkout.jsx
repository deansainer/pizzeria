import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../App";
import axios from "axios";

const Checkout = () => {
  const { cartItems, setCartItems, setOrder, order, cartTotal } = useContext(PizzaContext);

  const date = new Date();
  const hours = String(date.getHours()+1).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const deliveryTime = `${hours}:${minutes}`;

  const [checkoutForm, setCheckoutForm] = useState({
    firstName: "",
    secondName: "",
    address: "",
    addressAdditional: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    deliveryTime: "",
  });

  const isFormFullFilled = checkoutForm.firstName && checkoutForm.secondName && checkoutForm.address && checkoutForm.city && checkoutForm.state && checkoutForm.phone && checkoutForm.email ? true : false


  function inputOnChange(event) {
    const { name, value } = event.target;
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  async function placeOrderSubmit() {
    const newOrder = {
      firstName: checkoutForm.firstName,
      secondName: checkoutForm.secondName,
      address: checkoutForm.address,
      addressAdditional: checkoutForm.addressAdditional,
      city: checkoutForm.city,
      state: checkoutForm.state,
      phone: checkoutForm.phone,
      email: checkoutForm.email,
      deliveryTime: deliveryTime,
      orderedItems: cartItems,
      total: Number(cartTotal),
      orderId: Math.floor(10000000 + Math.random() * 90000000)
    };
    
    setOrder(newOrder);
    setCartItems([]);
  
    console.log('Your order: ', newOrder);

    // post req to place an order
    await axios.post('http://localhost:3001/api/newOrder', newOrder);
  }


  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__double_inputs">
          <input
            name="firstName"
            onChange={inputOnChange}
            className={`checkout__double_input ${checkoutForm.firstName ? '' : 'required_input'}`}
            placeholder="Name"
            type="text"
          ></input>
          <input
            name="secondName"
            onChange={inputOnChange}
            className={`checkout__double_input ${checkoutForm.secondName ? '' : 'required_input'}`}
            placeholder="Surname"
            type="text"
          ></input>
        </div>

        <input
          name="address"
          onChange={inputOnChange}
          className={`checkout__single_input ${checkoutForm.address ? '' : 'required_input'}`}
          placeholder="Street Address"
        ></input>
        <input
          name="addressAdditional"
          onChange={inputOnChange}
          className="checkout__single_input"
          placeholder="Street Address Line 2"
        ></input>

        <div className="checkout__double_inputs">
          <input
            name="city"
            onChange={inputOnChange}
            className={`checkout__double_input ${checkoutForm.city ? '' : 'required_input'}`}
            placeholder="City"
            type="text"
          ></input>
          <input
            name="state"
            onChange={inputOnChange}
            className={`checkout__double_input ${checkoutForm.state ? '' : 'required_input'}`}
            placeholder="State / Province"
            type="text"
          ></input>
        </div>

        <div className="checkout__double_inputs">
          <input
            name="phone"
            onChange={inputOnChange}
            className={`checkout__double_input ${checkoutForm.phone ? '' : 'required_input'}`}
            placeholder="(000) 000-000"
            type="text"
          ></input>
          <input
            name="email"
            onChange={inputOnChange}
            className={`checkout__double_input ${checkoutForm.email ? '' : 'required_input'}`}
            placeholder="email@yahoo.com"
            type="text"
          ></input>
        </div>

        {/* estimated delivery time */}
        <div className="checkout__estimated_time">
          Estimated delivery time: {deliveryTime}
        </div>

        {/* place order button */}
        {isFormFullFilled ? (
            <Link to={"/thankyou"}>
            <button onClick={placeOrderSubmit} className="checkout__order_button">Place Order</button>
          </Link>
        ): <span className="required_text">All required fields must be filled in</span>}

      </div>
    </div>
  );
};

export default Checkout;
