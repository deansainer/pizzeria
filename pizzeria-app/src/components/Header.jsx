import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { PizzaContext } from '../App'

const Header = ({}) => {

  const {totalCartQuantity, cartTotal} = useContext(PizzaContext)

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to={'/'}><img width="50" height="50" src="https://cdn-icons-png.flaticon.com/128/3063/3063829.png" alt="Pizza logo" /></Link>
          <div>
            <h1>Cheesy Bite</h1>
            <p>Best pizza in Europe</p>
          </div>
        </div>
        <div className="header__cart">
          </div>
        <Link to={'/cart'} className="button button--cart">
          <span>${cartTotal}</span>
          <div className="button__delimiter"></div>
          <img className='cart__icon' src="https://cdn-icons-png.flaticon.com/128/4647/4647563.png" alt="cart" />
          <span>{totalCartQuantity}</span>
        </Link>

      </div>
    </div>
  )
}

export default Header