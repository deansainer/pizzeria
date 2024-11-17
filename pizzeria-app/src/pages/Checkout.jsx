import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    surname: '',
    address: '',
    addressAdditional: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    deliveryTime: ''
  })

  // delivery time box
  let currentHour = new Date().getHours();
  const hours = []
  for(let i=1; i<=5; i++){
    hours.push(currentHour + i)
  }

  return (
    <div className='checkout'>
      <div className='checkout__container'>
        <div className='checkout__double_inputs'>
          <input className='checkout__double_input' placeholder='Name' type='text'></input>
          <input className='checkout__double_input' placeholder='Surname' type='text'></input>
        </div>

        <input className='checkout__single_input' placeholder='Street Address'></input>
        <input className='checkout__single_input' placeholder='Street Address Line 2'></input>
        
        <div className='checkout__double_inputs'>
          <input className='checkout__double_input' placeholder='City' type='text'></input>
          <input className='checkout__double_input' placeholder='State / Province' type='text'></input>
        </div>

        <div className='checkout__double_inputs'>
          <input className='checkout__double_input' placeholder='(000) 000-000' type='text'></input>
          <input className='checkout__double_input' placeholder='email@yahoo.com' type='text'></input>
        </div>

        <div className='checkout__time_selector'>
          <select className='option_box' id="selector">
            {hours.map((hour) => (
            <option value="hour">{hour}:00</option>
            ))}
          </select>
        </div>

        <Link to={'/thankyou'}>
        <button className='checkout__order_button'>Place Order</button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout