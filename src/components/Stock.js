import React from 'react'

const Stock = (props) => (
  <div>
{/* without ()=> we're executing or firing the function but with the arrow function we're defining the function whos job is to firing the function.*/}
    <div className="card" onClick={()=>props.handleClickStock(props)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
            `${props.ticker} : ${props.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock

{/*get access to props in a functional component, using props, no this */}
