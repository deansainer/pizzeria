import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Orders = () => {
    const [orders, setOrders] = useState([])

    async function getOrders(){
        const response = await axios.get('http://localhost:3001/api/orders')
        setOrders(response.data);
    }

    async function completeOrder(orderid){
        try {
            if(orderid){
                await axios.post(`http://localhost:3001/api/orders/${orderid}/complete`)
                getOrders()
            }
        } catch (error) {
            console.log('error while completing the order');
        }
    }

    useEffect(() => {
        getOrders()
    }, [])
    

  return (
    <div className='orders'>
        <img className='history_icon' src='https://cdn-icons-png.flaticon.com/128/6503/6503273.png'></img>
            {orders.map((order) => (
                        <div className='orders__card'>
                            <img onClick={() => completeOrder(order.orderid)} style={{cursor: 'pointer'}} className='orders__card__complete_icon' src='https://i.ibb.co/XFMKvdk/checked.png' alt=''></img>
                            <span className='span1' style={{fontWeight:'bold'}}>#{order.orderid}</span>
                            <span className='span2'>{`${order.firstname} ${order.secondname}`}</span>
                            <span className='span3'>{order.address}</span>
                            <span className='span3'>{order.city}</span>
                            <span className='span3'>{order.phone}</span>
                            <span className='span3'>{order.email}</span>
                            <span className='span3'>ETA: {order.deliverytime}</span>
                            <span className='span3'>Total: ${order.total}</span>
                         </div>
            ))}
        </div>
  )
}

export default Orders