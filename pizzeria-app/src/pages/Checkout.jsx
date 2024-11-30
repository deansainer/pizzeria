import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../App";

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
  // function isFormFilledOut(){
  //   if(checkoutForm.firstName && checkoutForm.secondName && checkoutForm.address && checkoutForm.city && checkoutForm.state && checkoutForm.phone && checkoutForm.email){
  //     return true
  //   } else{
  //     return false
  //   }
  // }

  function inputOnChange(event) {
    const { name, value } = event.target;
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function placeOrderSubmit() {
    setOrder({
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
      total: cartTotal
    });
    setCartItems([])
  }
console.log(checkoutForm);


  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__double_inputs">
          <input
            name="firstName"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="Name"
            type="text"
            style={{  border: checkoutForm.firstName ? '1px solid rgb(184, 184, 184)' : '1px solid rgb(209, 95, 95)'}}
          ></input>
          <input
            name="secondName"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="Surname"
            type="text"
            style={{  border: checkoutForm.secondName ? '1px solid rgb(184, 184, 184)' : '1px solid rgb(209, 95, 95)'}}
          ></input>
        </div>

        <input
          name="address"
          onChange={inputOnChange}
          className="checkout__single_input"
          placeholder="Street Address"
          style={{  border: checkoutForm.address ? '1px solid rgb(184, 184, 184)' : '1px solid rgb(209, 95, 95)'}}
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
            style={{  border: checkoutForm.city ? '1px solid rgb(184, 184, 184)' : '1px solid rgb(209, 95, 95)'}}
          ></input>
          <input
            name="state"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="State / Province"
            type="text"
            style={{  border: checkoutForm.state ? '1px solid rgb(184, 184, 184)' : '1px solid rgb(209, 95, 95)'}}
          ></input>
        </div>

        <div className="checkout__double_inputs">
          <input
            name="phone"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="(000) 000-000"
            type="text"
            style={{  border: checkoutForm.phone ? '1px solid rgb(184, 184, 184)' : '1px solid rgb(209, 95, 95)'}}
          ></input>
          <input
            name="email"
            onChange={inputOnChange}
            className="checkout__double_input"
            placeholder="email@yahoo.com"
            type="text"
            style={{  border: checkoutForm.email ? '1px solid rgb(184, 184, 184)' : '1px solid rgb(209, 95, 95)'}}
          ></input>
        </div>

        {/* estimated selector */}
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
