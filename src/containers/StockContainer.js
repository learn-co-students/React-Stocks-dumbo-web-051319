import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log('it me stock container')
    // console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        { this.props.stocks.map(stock => <Stock
          stock={stock}
          key={stock.id} buyStock={this.props.buyStock}
          />)
        }
      </div>
    );
  }

}

export default StockContainer;
