import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  displayStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} addStock={this.props.addStock}/>
  })
}

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.displayStocks()}
      </div>
    );
  }

}

export default StockContainer;
