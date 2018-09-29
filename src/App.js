import React, { Component } from 'react';
import logo from './flight.svg';
import './App.css';
import 'typeface-roboto';
import SearchSectionComponent from './components/search-section';
import Grid from '@material-ui/core/Grid';
import SearchResultHeader from './components/search-result-header';
import FlightListComponent from './components/flight-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchObject: {
        origin: "PNQ",
        destination: "DEL",
        dateOfDeparture: "2018-09-21",
        dateOfReturn: "",
        noOfPassengers: "",
        price: ""
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Grid container spacing={8}>
          <Grid item md={12}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Flight Search Engine</h1>
            </header>
          </Grid>
          <Grid item md={12}>
            <div className="App-intro">
              <Grid
                container
                spacing={8}
                direction="row"
              >
                <Grid item md={3}>
                  <div className="search-section" >
                    <SearchSectionComponent handleSliderChange={this.handleSliderChange} searchFlights={this.searchFlights} />
                  </div>
                </Grid>
                <Grid item md={9}>
                  <div className="search-result">
                    <Grid item md={9}>
                      <div className="search-result-header">
                        <SearchResultHeader origin={this.state.searchObject.origin}
                          destination={this.state.searchObject.destination}
                          dateOfDeparture={this.state.searchObject.dateOfDeparture}
                          dateOfReturn={this.state.searchObject.dateOfReturn} /></div>
                    </Grid>
                    <Grid item md={9}>
                      <div className="search-result-list"><FlightListComponent searchObject={this.state.searchObject} /></div>
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

  handleSliderChange = (value) => {
    let searchObject = this.state.searchObject;
    searchObject.price = value;
    this.setState({ searchObject });
    console.log("################", value);
  };

  searchFlights = (search) => {
    this.setState({ searchObject: search }, () => { console.log("******appJS : :", this.state.searchObject) });
  }
}

export default App;
