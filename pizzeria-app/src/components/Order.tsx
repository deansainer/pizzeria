import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Order = () => {

const [order, setOrder] = useState({})
const {orderId} = useParams()

async function getOrderData(orderId){
    const response = await axios.get(`http://localhost:3001/api/orders/${orderId}`)
    setOrder(response.data)
    console.log(order);
}

useEffect(() => {
    getOrderData(orderId)
}, [orderId])

console.log(order);

  return (
    <div className='order_container'>
        <div className='order_container__order'>
            <span>order: {orderId}</span>          
        </div>
    </div>
  )
}

export default Order