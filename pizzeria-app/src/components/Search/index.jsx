import React from 'react'
import styles from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {
  return (
    <div className={styles.root}>
        <img className={styles.icon} src='https://cdn-icons-png.flaticon.com/128/3031/3031293.png'></img>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder='Search pizza'></input>
    </div>
  )
}

export default Search