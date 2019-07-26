import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {


  render() {

    return (
      <div>
        <MainContainer/>
        <Header/>
      </div>
    );
  }
}

export default App;
