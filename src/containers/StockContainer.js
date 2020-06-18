import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  makeStockComponents = () => this.props.stocks.map((stock) =>  <Stock data={stock} key={stock.id} handleClick={this.props.handleClick}/>)



  render() {
    // console.log(this.props);


    return (
      <div>
        <h2>Stocks</h2>
        {this.makeStockComponents()}
      </div>
    );
  }

}

export default StockContainer;
