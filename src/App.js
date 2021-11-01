import React, { Component } from 'react';
import Lifecycles from './Lifecycles';
import './App.css';
import { HomePage } from './HomePage';
import { Route } from 'react-router-dom'


const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}


class App extends Component {

  render() {
    return (
    <div className="App">
      <h1>Header</h1>
      <Route exact path='/' component={ HomePage }></Route>
      <Route exact path='/hats' component={ HatsPage }></Route>
      {/* <HomePage/> */}
    </div>
  );}
}

export default App;
