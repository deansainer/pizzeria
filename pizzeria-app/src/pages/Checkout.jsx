import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../App";

const Checkout = () => {
  const { cartItems } = useContext(PizzaContext);

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

  // delivery time box
  let currentHour = new Date().getHours();
  const hours = [];
  for (let i = 1; i <= 5; i++) {
    hours.push(currentHour + i);
  }

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
    const order = {
      firstName: checkoutForm.name,
      surname: checkoutForm.surname,
      address: checkoutForm.address,
      addressAdditional: checkoutForm.addressAdditional,
      city: checkoutForm.city,
      state: checkoutForm.state,
      phone: checkoutForm.phone,
      email: checkoutForm.email,
      deliveryTime: checkoutForm.deliveryTime,
      orderedItems: cartItems
    }
    console.log(order);
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

        {/* time selector */}
        <div className="checkout__time_selector">
          <select
            name="deliveryTime"
            value={checkoutForm.deliveryTime}
            onChange={inputOnChange}
            className="option_box"
            id="selector"
          >
            <option value="">Select Delivery Time</option> {/* Placeholder */}
            {hours.map((hour) => (
              <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
            ))}
          </select>
        </div>

        {/* place order button */}
          <Link to={"/thankyou"}>
            <button
              onClick={placeOrderSubmit}
              className="checkout__order_button"
            >
              Place Order
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Checkout;
