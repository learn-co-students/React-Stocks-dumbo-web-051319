import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {



  displayPortfolio=()=>{
      return this.props.portfolio.map((stock) => {
      return <Stock key={stock.id} stock={stock} deleteStock={this.props.delete}/>
      })
  }



  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
          this.displayPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
