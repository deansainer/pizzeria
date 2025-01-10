import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const currentUser = Cookies.get('username')
    const navigate = useNavigate();

    useEffect(() => {
        if(!currentUser){
            navigate('/admin')
        } else{
            console.log('user is here:)');
        }
    }, [currentUser])

    const [orders, setOrders] = useState([])

    const [isCompleted, setIsCompleted] = useState(false)

    function logOut(){
        Cookies.remove('username')
        Cookies.remove('token')
        window.location.reload()
    }

    async function getOrders(){
        if(currentUser){
            const response = await axios.get(`http://localhost:3001/api/orders?isCompleted=${isCompleted}`)
            setOrders(response.data);
        } else{
            setOrders([])
        }

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
    
  return (
    <div className='orders'>
        <div className='username_logout'>
            <span className='admin_username'> admin: {currentUser}</span>
            <img className='logout' onClick={logOut} src='https://i.ibb.co/DKQ5xTp/logout-1.png'/>
        </div>

        <span className='pending_or_completed'>{isCompleted? 'completed orders' : 'pending orders'}<img onClick={() => setIsCompleted(!isCompleted)} className='order_arrows' src='https://cdn-icons-png.flaticon.com/128/5436/5436326.png'></img></span>
            {orders.map((order) => (
                        <div className='orders__card' style={{backgroundColor: order.iscompleted ? 'rgb(185, 185, 185)' : 'white'}}>
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