import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then((resp) => resp.json())
        .then((json) => this.setState({stocks: json}))
      }

  state = {
    stocks: [],
    portfolio: [],
    filterTerm: 'All',
    sortTerm: "Alphabetically",
  }

  setFilterTerm = (term) => {
    // debugger
    this.setState({filterTerm: term})
  }

  setSortTerm = (term) => {
    // console.log(term);
    this.setState({sortTerm: term})
  }

  buyStock = (stock) => {
    this.setState((oldState) => {
      return {
        portfolio: [stock, ...oldState.portfolio]
      }
    })
  }

  sellStock = (stock) => {
    let idx = this.state.portfolio.indexOf(stock)
    let stocks = [...this.state.portfolio]
    stocks.splice(idx, 1)
    this.setState({portfolio: stocks})
    // console.log(stocks);
  }

  filteredStocks = () => {
    let stocks = [...this.state.stocks]
    if(this.state.filterTerm === "All") {
      stocks = this.state.stocks
    } else {
      stocks = this.state.stocks.filter((stock) => stock.type === this.state.filterTerm)
    }
    if(this.state.sortTerm === "Price") {
      stocks = stocks.sort((stockA, stockB) => {
        return stockB.price - stockA.price
      })
    } else if (this.state.sortTerm === "Alphabetically") {
      stocks = stocks.sort((stockA, stockB) => {
        return stockA.name.localeCompare(stockB.name)
      })
    }
    return stocks
  }

  render() {
    return (
      <div>
        <SearchBar sortTerm={this.state.sortTerm} setSortTerm={this.setSortTerm} handleChange={this.setFilterTerm} filterTerm={this.state.filterTerm}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filterTerm={this.state.filterTerm} stocks={this.filteredStocks()} handleClick={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
