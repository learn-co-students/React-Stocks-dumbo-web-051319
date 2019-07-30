import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.portfolio.map((oneStock, i)=><Stock
            key={`${oneStock.name} - ${i}`}
            {...oneStock}
            handleClickStock={this.props.removeStock}
            />)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
