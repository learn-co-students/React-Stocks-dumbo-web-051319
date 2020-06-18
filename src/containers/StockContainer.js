import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Stocks</h2>
        {
          // transfrom each ofthe object in the array using map
          this.props.stocks.map((oneStock)=><Stock
          key={oneStock.id}
          {...oneStock}
          handleClickStock={this.props.buyStock}
          />)
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
