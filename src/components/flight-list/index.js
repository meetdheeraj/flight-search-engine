import React, { Component } from 'react';
import 'typeface-roboto';
import FlightComponent from './flight';
import './flight-list.css';
import flightList from './../../flight-data/data.json';
import NoDataContainer from './../no-data-container';

class FlightListComponent extends Component {
  render() {
    let oneWayFlight;
    let returnFlight;
    let isReturnAvailable = false;
    const isSearched = this.props.searchObject.origin && true;
    const filteredFlightList = this.getFilteredFlightList(flightList);

    return (
      <div className="flight-list-container">
        {filteredFlightList.map((flight) => {
          oneWayFlight = null;
          returnFlight = null;
          if (flight.date === this.props.searchObject.dateOfDeparture) {
            oneWayFlight = flight;
            for (let retflight of filteredFlightList) {
              if (retflight.date === this.props.searchObject.dateOfReturn
                && (oneWayFlight.flightName.substring(0, 2) === retflight.flightName.substring(0, 2))) {
                returnFlight = retflight;
                break;
              }
            };
            if (this.props.searchObject.dateOfReturn && returnFlight === null) {
              return null;
            } else {
              isReturnAvailable = true;
              return <FlightComponent key={flight.flightName} oneWayFlight={oneWayFlight} returnFlight={returnFlight} />
            }
          }
          return null;

        })}
        {(filteredFlightList.length === 0 || !isReturnAvailable) && <NoDataContainer isSearched={isSearched}/>}
      </div>
    );
  }

  getFilteredFlightList = (flightList) => {
    return flightList.filter((obj) => {
      return (obj.origin === this.props.searchObject.origin
        || obj.origin === this.props.searchObject.destination)
        && (obj.destination === this.props.searchObject.origin
          || obj.destination === this.props.searchObject.destination)
        && (obj.date === this.props.searchObject.dateOfDeparture
          || obj.date === this.props.searchObject.dateOfReturn)
        && obj.price <= this.props.searchObject.price;
    });
  }
}

export default FlightListComponent;
