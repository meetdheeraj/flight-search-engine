import React, { Component } from 'react';
import 'typeface-roboto';
import FlightComponent from './flight';
import './flight-list.css';
import flightList from './../../flight-data/data.json';

class FlightListComponent extends Component {
  render() {
    console.log("*******FlightListComponent 1 :: ", flightList);
    const filteredFlightList = flightList.filter((obj) => {
      console.log(obj);
      return obj.origin === this.props.searchObject.origin
        && obj.destination === this.props.searchObject.destination
        && obj.destination === this.props.searchObject.destination
        && obj.date === this.props.searchObject.dateOfDeparture;
    });
    console.log("*******FlightListComponent 2 :: ", filteredFlightList);
    return (
      <div className="flight-list-container">
        {filteredFlightList.map((flight) => {
            return <FlightComponent key={flight.flightName} flight={flight}/>
        })}
      </div>
    );
  }
}

export default FlightListComponent;
