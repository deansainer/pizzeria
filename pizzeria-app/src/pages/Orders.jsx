import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Orders = () => {
    const [orders, setOrders] = useState([])

    const [isCompleted, setIsCompleted] = useState(false)

    async function getOrders(){
        const response = await axios.get(`http://localhost:3001/api/orders?isCompleted=${isCompleted}`)
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
    }, [isCompleted])
    
    console.log(orders);
  return (
    <div className='orders'>
        <span onClick={() => setIsCompleted(!isCompleted)} className='pending_or_completed'>{isCompleted? 'completed orders' : 'pending orders'}</span>
            {orders.map((order) => (
                        <div className='orders__card'>
                            {order.iscompleted === false && <img onClick={() => completeOrder(order.orderid)} style={{cursor: 'pointer'}} className='orders__card__complete_icon' src='https://i.ibb.co/XFMKvdk/checked.png'></img>}
                            <Link to={order.orderid}><span className='span1' style={{fontWeight:'bold'}}>#{order.orderid}</span></Link>
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