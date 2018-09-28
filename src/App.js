import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import SearchSectionComponent from './components/search-section';
import Grid from '@material-ui/core/Grid';
import SearchResultHeader from './components/search-result-header';
import FlightListComponent from './components/flight-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Flight Search Engine</h1>
            </header>
          </Grid>
          <Grid item xs={12}>
            <div className="App-intro">
            <Grid
            container
            spacing={8}
            direction="row"
          >
              <Grid item xs={3}>
                <div className="search-section" >
                  <SearchSectionComponent />
                </div>
              </Grid>
              <Grid item xs={9}>
                <div className="search-result">
                  <Grid item xs={9}>
                    <div className="search-result-header">
                      <SearchResultHeader /></div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className="search-result-list"><FlightListComponent /></div>
                  </Grid>
                </div>
              </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
