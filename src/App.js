import React, { Component } from 'react';
import './App.css';
import './style.css';
import Header from './Header'
import MemeGenerator from './MemeGenerator'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
    );
  }
}

export default App;
