
import React, { useContext } from 'react'
import { PizzaContext } from '../App'

const Categories = ({onClickCategory}) => {
  const {activeCategory} = useContext(PizzaContext)
  
  const categories = ['All', 'Meat', 'Vegeterian', 'Spicy', ]

  return (
    <div className="categories">
    <ul>
      {categories.map((category, id) => (
        <li onClick={() => onClickCategory(id)} className={activeCategory === id ? 'active' : ''}>{category}</li>  
      ))}

    </ul>
  </div>
  )
}

export default Categories