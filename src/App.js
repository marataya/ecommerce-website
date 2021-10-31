import React, { Component } from 'react';
import Lifecycles from './Lifecycles';
import './App.css';
import { HomePage } from './HomePage';

class App extends Component {

  render() {
    return (
    <div className="App">
      <h1>
        Hello world
      </h1>
      <HomePage/>
    </div>
  );}
}

export default App;
