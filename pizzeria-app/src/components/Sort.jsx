import React, { useContext, useState } from 'react';
import { PizzaContext } from '../App';
import Search from "../components/Search/index";

const Sort = ({ onClickSort, sortingTypes, isDesc, setIsDesc}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const {sortingType, searchValue, setSearchValue} = useContext(PizzaContext);
    
    return (
      <div className="sort">
        <div className="sort__label">

          {/* search bar */}
          <div className="header__search_bar">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          
          <img onClick={() => setIsDesc(!isDesc)} src="https://cdn-icons-png.flaticon.com/128/4662/4662255.png"/>
          <b>Sort by:</b>
          <span onClick={() => setIsOpen(!isOpen)}>{sortingTypes[sortingType]}</span>
        </div>
        
        {isOpen && (
          <div className="sort__popup">
            <ul>
              {sortingTypes.map((sortingType, id) => (
                <li key={id} onClick={() => {onClickSort(id); setIsOpen(!isOpen)}}>{sortingType}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}

export default Sort;
