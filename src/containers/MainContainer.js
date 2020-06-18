import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3000/stocks"


class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(stocks => this.setState({stocks: stocks})
    )
  }

  buyStock = (stock) => {
    this.setState((prevState) => {
      return {
        portfolio: [stock, ...prevState.portfolio]
      }
    })
    console.log(this.state.portfolio)
  }


  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks}
              buyStock={this.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
              portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
