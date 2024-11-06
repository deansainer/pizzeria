import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { PizzaContext } from '../App'

const Header = ({}) => {

  const {searchValue, setSearchValue, totalCartQuantity, cartTotal} = useContext(PizzaContext)

  return (
    <div className="header">
    <div className="container">
      <div className="header__logo">
        <Link to={'/'}><img width="46" height="46" src="https://cdn-icons-png.flaticon.com/128/6951/6951768.png" alt="Pizza logo" /></Link>
        <div>
          <h1>Sedo pizza</h1>
          <p>Best pizza in Ukraine</p>
        </div>
      </div>
      <div className="header__cart">
        <div className="content__search_bar">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <Link to={'/cart'} className="button button--cart">
          <span>${cartTotal}</span>
          <div className="button__delimiter"></div>
          <img className='cart__icon' src="https://cdn-icons-png.flaticon.com/128/4647/4647563.png" alt="cart" />
          <span>{totalCartQuantity}</span>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Header