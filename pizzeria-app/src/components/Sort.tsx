import React, { useState } from 'react';

const Sort = ({ sortingType, onClickSort, sortingTypes, isDesc, setIsDesc}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="sort">
        <div className="sort__label">
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
