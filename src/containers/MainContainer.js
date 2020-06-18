import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  // array of stock,
  state={
    stocks: [],
    portfolio:[],                //hold the added stock objects
    filterTerm: "All",            //show all stocks; set filterTerm
    sortTerm: ""
  }
// get the array of stock from our frontend

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(stocksData => {
      this.setState({
        stocks: stocksData                        //socks pointing to that
      })
    })
  }

  buyStock=(stock)=>{
    // console.log(this.state);
    // this.setState((stock)=> {
    //   portfolio: [stock, ...stock.portfolio]
    // })
    this.setState({portfolio: [stock, ...this.state.portfolio]})                //change the state using setState
    // a key of portfoliopointing to stock obj and this.state.portfolio; so here I'm making a copy of all the portfolio stocks and prepending to it .obj(this.state.portfolio)
  }


  removeStock = (stock)=>{
    // console.log(stock);
    // console.log(this.state)
    // let index = this.state.portfolio.filter(portfolioStock => portfolioStock.id !=== stock.id)
    let index = this.state.portfolio.findIndex(portfolioStock => portfolioStock.id === stock.id)
    // console.log('index', index);
    let stocks = [...this.state.portfolio]
    stocks.splice(index, 1)
    this.setState({
      portfolio: stocks
    })
    // console.log(stocks);
    // this.setState({portfolio: [stock, ...this.state.portfolio]})
  }

  //sending it to search bar
  setFilterTerm = (term) => {
    // console.log(term);
    this.setState={
      filterTerm: term
    }
  }


  setSortTerm = (term) => {
    this.setState({
      sortTerm: term
    })

  }

  filterStockTerm = () => {
    let copiedStocks = [...this.state.stocks]
    // Filter the stocks
    if (this.state.filterTerm === 'All') {
      copiedStocks = [...this.state.stocks]
    }else {
      copiedStocks = this.state.stocks.filter(stock => stock.type === this.state.filterTerm)
    }


    // sort the socks
    if (this.state.sortTerm === "Price") {
      copiedStocks.sort((stockA, stockB) => {
        return stockA.price - stockB.price
      })
    } else if (this.state.sortTerm === "Alphabetically") {
      copiedStocks.sort((stockA, stockB) => {
        // debugger
        return stockA.name.localeCompare(stockB.name)
      })
    }
    return copiedStocks
  }

  render() {
    // console.log(this.state.sortTerm);
    // console.log('MainContainer', this.state);
    return (
      <div>
        <SearchBar
          setFilterTerm = {this.setFilterTerm}
          term={this.state.filterTerm}
          setSortTerm={this.setSortTerm}
          sortTerm={this.state.sortTerm}
        />
        {/* term={this.state.filterTerm} allows to add value to SearchBar --value={props.term}*/}

          <div className="row">
            <div className="col-8">
       {/* sent the array of stock down to StockContainer --send down information using state
         --pass down a function which is when executed sends back up */}
              <StockContainer stocks={this.filterStockTerm()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">
          {/*  // render down my stocks*/}
              <PortfolioContainer portfolio={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
