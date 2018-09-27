import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import SearchSectionComponent from './components/search-section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Flight Search Engine</h1>
        </header>
        <div className="App-intro">
          <div className="search-section" >
            <SearchSectionComponent />
          </div>
          <div className="search-result">
            <div className="search-result-header"></div>
            <div className="search-result-list"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
