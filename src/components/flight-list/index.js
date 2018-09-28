import React, { Component } from 'react';
import 'typeface-roboto';
import FlightComponent from './flight';
import './flight-list.css';
import flightList from './../../flight-data/data.json';

class FlightListComponent extends Component {
  render() {
    return (
      <div className="flight-list-container">
        {flightList.map((flight) => {
            return <FlightComponent flight={flight}/>
        })}
      </div>
    );
  }
}

export default FlightListComponent;
