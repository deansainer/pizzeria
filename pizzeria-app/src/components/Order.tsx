import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { thicknesses, sizes } from './PizzaItem.tsx'


const Order = () => {

const [order, setOrder] = useState({})
const {orderId} = useParams()

async function getOrderData(orderId){
  try {
    const response = await axios.get(`http://localhost:3001/api/orders/${orderId}`)
    setOrder(response.data)
    console.log(order);
  } catch (error) {
    console.error(error)
  }
}

useEffect(() => {
    getOrderData(orderId)
}, [orderId])

return (
  <div className="order_container">
    <div className="order_container__order">
      <h2 style={{padding: '5px'}}>#{orderId}</h2>
      {order.ordereditems && order.ordereditems.length > 0 && (
      <table style={{border: '2px solid white'}} class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Thickness</th>
            <th scope="col">Size</th>
          </tr>
        </thead>
        <tbody>          
          {order.ordereditems.map((item) => (            
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{thicknesses[item.selectedThickness]}</td>
              <td>{sizes[item.selectedSize]}</td>
            </tr>
            ))}
        </tbody>
      </table>)}

      <Link to={'/orders'}>
        <img style={{position: 'absolute', right: '11px', height: '30px', width: '30px', top: '10px'}} src='https://i.ibb.co/X4W8PRG/cross-2.png'></img>
      </Link>

      <div>
        <span className='order_total_label'>Total: ${order.total}</span>
      </div>
    </div>
  </div>
);
}

export default Order