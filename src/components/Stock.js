
import React, { Component } from 'react';

class Stock extends Component {

handleClick=()=>{
  console.log(this.props)
    this.props.deleteStock ?
    this.props.deleteStock(this.props.stock) :
    this.props.addStock(this.props.stock)
  }



  render(){
    return(

  <div>

      <div className="card">
        <div className="card-body">
          <h5 onClick={this.handleClick} className="card-title">{
              this.props.stock.name
            }</h5>
          <p className="card-text">
              {this.props.stock.ticker}:{this.props.stock.price}
            </p>
        </div>
      </div>
</div>
)}
  };









export default Stock;
