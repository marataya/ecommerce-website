import React, { Component } from 'react';
import Lifecycles from './Lifecycles';
import './App.css';
import { HomePage } from './HomePage';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './ShopPage';
import Header from './components/Header';
import SignInUp from './SignInUp'

class App extends Component {

  render() {
    return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage }></Route>
        <Route exact path='/shop' component={ ShopPage }></Route>
        <Route exact path='/signin' component={ SignInUp }></Route>
      </Switch>
      {/* <HomePage/> */}
    </div>
  );}
}

export default App;
