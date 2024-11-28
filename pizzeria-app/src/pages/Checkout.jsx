import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../App";

const Checkout = () => {
  const { cartItems, setCartItems, setOrder, order, cartTotal } = useContext(PizzaContext);

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const deliveryTime = `${hours}:${minutes}`;

  const [checkoutForm, setCheckoutForm] = useState({
    firstName: "",
    surname: "",
    address: "",
    addressAdditional: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    deliveryTime: "",
  });

  const filledOutForm = Object.values(checkoutForm).every(
    (formValue) => formValue !== ""
  );

  function inputOnChange(event) {
    const { name, value } = event.target;
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function placeOrderSubmit() {
    setOrder({
      firstName: checkoutForm.name,
      surname: checkoutForm.surname,
      address: checkoutForm.address,
      addressAdditional: checkoutForm.addressAdditional,
      city: checkoutForm.city,
      state: checkoutForm.state,
      phone: checkoutForm.phone,
      email: checkoutForm.email,
      deliveryTime: deliveryTime,
      orderedItems: cartItems,
      total: cartTotal
    });
    setCartItems([])
  }

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__double_inputs">
          <input
            name="name"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="Name"
            type="text"
          ></input>
          <input
            name="surname"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="Surname"
            type="text"
          ></input>
        </div>

        <input
          name="address"
          onChange={inputOnChange}
          className="checkout__single_input"
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
            className="checkout__double_input"
            placeholder="City"
            type="text"
          ></input>
          <input
            name="state"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="State / Province"
            type="text"
          ></input>
        </div>

        <div className="checkout__double_inputs">
          <input
            name="phone"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="(000) 000-000"
            type="text"
          ></input>
          <input
            name="email"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="email@yahoo.com"
            type="text"
          ></input>
        </div>

        {/* estimated selector */}
        <div className="checkout__estimated_time">
          Estimated delivery time: {deliveryTime}
        </div>

        {/* place order button */}
        <Link to={"/thankyou"}>
          <button onClick={placeOrderSubmit} className="checkout__order_button">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
