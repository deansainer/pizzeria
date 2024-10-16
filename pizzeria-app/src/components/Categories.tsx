
import React, { useState } from 'react'

const Categories = ({activeCategory, onClickCategory}) => {

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