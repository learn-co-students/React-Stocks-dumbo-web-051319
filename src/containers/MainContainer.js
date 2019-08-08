import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterTerm: "All",
    sortTerm: ''
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(jsonStocks => this.setState({
      stocks: jsonStocks
     
    })
    )
  }
  
  setFilterTerm = (term) => {
    this.setState({
      filterTerm: term
    })
  }

  setSortTerm = (term) => {
  this.setState({
    sortTerm:term
  })}

  buyStock = (stock) => {
    this.setState((prevState) => {
    return {
      portfolio:[stock, ...prevState.portfolio]
    }
  })
  }
  removeStock = (stock) => {
    let index = this.state.portfolio.indexOf(stock)
    let stocks = [...this.state.portfolio]
    stocks.splice(index,1)
    this.setState({
        portfolio: stocks
    })
  }

  whichStockstoRender = () => {
    let renderedStocks = [...this.state.stocks];
    if(this.state.filterTerm === "All"){
      renderedStocks = [...this.state.stocks]
    }
    else{
      renderedStocks = this.state.stocks.filter(stock => stock.type === this.state.filterTerm)
    }

    if (this.state.sortTerm === "Price"){
      renderedStocks.sort((a,b) => {
        return a.price - b.price
    })}
    else if (this.state.sortTerm === "Alphabetically"){
      renderedStocks.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
   }
    return renderedStocks
  }

  
  render() {
    return (
      <div>
        <SearchBar setFilterTerm={this.setFilterTerm} term={this.state.filterTerm} setSortTerm={this.setSortTerm} sortTerm={this.state.sortTerm}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.whichStockstoRender()} buyStock ={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.removeStock} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    )
  }

}

export default MainContainer
