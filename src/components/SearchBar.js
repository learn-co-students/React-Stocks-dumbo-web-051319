import React from 'react';

const SearchBar = (props ) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortTerm === 'Alphabetically'} onChange={(e) => props.setSortTerm(e.target.value)} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortTerm === 'Price'} onChange={(e) => props.setSortTerm(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
         {/* in order to change what i'm sending up, I'll wrape onChange in an enormous function */}
        <select onChange={(e)=>props.setFilterTerm(e.target.value)} value={props.term}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="All">All</option>            //still see ALL at the top because I hard coded it in the state filter
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
