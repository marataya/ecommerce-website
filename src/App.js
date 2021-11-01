import React, { Component } from 'react';
import Lifecycles from './Lifecycles';
import './App.css';
import { HomePage } from './HomePage';
import { Route } from 'react-router-dom'
import ShopPage from './ShopPage';


class App extends Component {

  render() {
    return (
    <div className="App">
      <h1>Header</h1>
      <Route exact path='/' component={ HomePage }></Route>
      <Route exact path='/shop' component={ ShopPage }></Route>
      {/* <HomePage/> */}
    </div>
  );}
}

export default App;
