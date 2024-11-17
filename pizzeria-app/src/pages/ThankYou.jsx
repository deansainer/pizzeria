import React, { useContext } from 'react'
import { PizzaContext } from '../App'

const ThankYou = () => {
  const {cartItems} = useContext(PizzaContext)

  return (
    <div className='thank'>
        <div className='thank__container'>
            <span className='thank__span1'>THANKS FOR YOUR ORDER!            <img style={{width: '40px'}} src='https://cdn-icons-png.flaticon.com/128/2420/2420620.png'></img></span>
            <span className='thank__span4'>Your order #0065432 is being prepared. We sent an email on your mail box with receipt.</span>
            <br></br><br></br>
            <span className='thank__span3'>Estimated Arrival</span>
            <span className='thank__span5'>November 24 at 7:00 pm</span>

            <div className='thank__receipt'><span className='thank__span3'>Order Receipt</span>
            <div className='thank__receipt_list'>
                {cartItems.map((item) => (
                  <span className='thank__receipt_item'>{`${item.title} / ${item.quantity} / 26cm / thin`}</span>

                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default ThankYou