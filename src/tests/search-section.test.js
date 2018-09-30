import React from 'react';
import ReactDOM from 'react-dom';
import SearchSectionComponent from '../components/search-section';

it('<SearchSectionComponent /> renders without crashing', () => {
    const div = document.createElement('div');
    const searchObject = {
        origin: "PNQ",
        destination: "DEL",
        dateOfDeparture: "2018-09-21",
        dateOfReturn: "2018-09-24",
        noOfPassengers: "2"
      }
    ReactDOM.render(<SearchSectionComponent searchObject={searchObject}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
