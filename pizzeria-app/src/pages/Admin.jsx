import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Admin = () => {
    const [orders, setOrders] = useState([])

    async function getOrders(){
        const response = await axios.get('http://localhost:3001/api/orders')
        setOrders(response.data);
    }

    useEffect(() => {
        getOrders()
    }, [])
    

    const order = {
        "firstName": "John",
        "secondName": "Paul",
        "address": "Konstruktorska 19A",
        "addressAdditional": "",
        "city": "Warsaw",
        "state": "Warsaw",
        "phone": "784374658",
        "email": "testemail@gmail.com",
        "deliveryTime": "23:39",
        "orderedItems": [
            {
                "id": 0,
                "image": "https://media.dodostatic.com/image/r:292x292/11EEC4064CE6CAE6A17B32E3D6F9228B.avif",
                "title": "BBQ bacon and cheese",
                "price": "12.99",
                "category": 1,
                "rating": 1,
                "quantity": 1,
                "selectedThickness": 0,
                "selectedSize": 0
            },
            {
                "id": 7,
                "image": "https://media.dodostatic.com/image/r:292x292/11EE873ED9C21CE2A2D71C0FEE8462CB.avif",
                "title": "Quattro Formaggi",
                "price": "13.99",
                "category": 2,
                "rating": 2,
                "quantity": 1,
                "selectedThickness": 0,
                "selectedSize": 0
            },
            {
                "id": 1,
                "image": "https://media.dodostatic.com/image/r:292x292/11EE8739E55F5BCE89E33C950E9F9698.avif",
                "title": "Pepperoni Fresh",
                "price": "11.99",
                "category": 1,
                "rating": 3,
                "quantity": 1,
                "selectedThickness": 0,
                "selectedSize": 0
            },
            {
                "id": 3,
                "image": "https://media.dodostatic.com/image/r:292x292/11EF0C97D80F98BEB5AE39A433329E78.avif",
                "title": "Supreme",
                "price": "16.99",
                "category": 3,
                "rating": 4,
                "quantity": 1,
                "selectedThickness": 0,
                "selectedSize": 0
            }
        ],
        "total": 55.96,
        "orderId": 61714833,
        "isCompleted": false
    }

  return (
    <div className='orders'>
            {orders.map((order) => (
                        <div className='orders__card'>
                            <img className='orders__card__complete_icon' src='https://i.ibb.co/XFMKvdk/checked.png'></img>
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

export default Admin