import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


// change your state and change your dom
  state = {
    stocks:[],
    portfolio:[],
    filterTerm:"All",
    sortTerm:''

  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stockData => this.setState({stocks:stockData}))
  }

  addStock=(stock)=>{
    const alreadyTakenStock = this.state.portfolio.find(portfolioStock => portfolioStock.id === stock.id)
    if (!alreadyTakenStock) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      });
    }
  }



  delete=(removeStock)=>{
    const copyPortfolio = this.state.portfolio.filter(stock => removeStock.id !== stock.id)
    this.setState({
      portfolio:copyPortfolio
    });
}

setFilterTerm = (term) => {
  this.setState({
    filterTerm:term
  });
}

stocksToRender = () => {
  if (this.state.filterTerm === "All"){
    return this.state.stocks
  } else {
    return this.state.stocks.filter(stock => stock.type === this.state.filterTerm)
    }
  }

  setSortTerm = (term) => {
    this.setState({
      sortTerm:term
    });
  }



  // handleClick= (event)=>{
  //   const stockId = event.target.id
  //   stockId === "remove" ? this.addStock(stockId) : this.addStock(+stockID)
  // }


  // removeStock = (currentstock) => {
  //   const newportfolio = this.state.portfolio.filter(stock => {return stock !== currentstock})
  //   this.setState({
  //     portfolio: newportfolio
  //   });
  // }
  render() {
    let filteredStocks = []
    if (this.state.filterTerm === "All"){
      filteredStocks = this.state.stocks
    } else {
      filteredStocks = this.state.stocks.filter(stock => stock.type === this.state.filterTerm)
      }

    return (
      <div>
        <SearchBar setFilterTerm={this.setFilterTerm} term={this.state.filterTerm} setSortTerm={this.setSortTerm} sortTerm={this.state.SortTerm}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStock={this.addStock} stocks={filteredStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer delete={this.delete} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;
