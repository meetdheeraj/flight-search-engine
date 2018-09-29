import React from 'react';
import ReactDOM from 'react-dom';
import FlightComponent from '../components/flight-list/flight';

it('<FlightComponent /> renders without crashing', () => {
  const div = document.createElement('div');
  const flight = {
    flightName: "F4-786",
    origin: "PNQ",
    destination: "DEL",
    arrivalTime: "10:24 AM",
    departureTime: "10:58 AM",
    price: "4000",
    date: "2018-09-21"
  }
  ReactDOM.render(<FlightComponent flight={flight}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
