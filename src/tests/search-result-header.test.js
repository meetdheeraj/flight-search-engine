import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultHeader from '../components/search-result-header';

it('<SearchResultHeader /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResultHeader origin={"DEL"}
        destination={"PNQ"}
        dateOfDeparture={"2018-09-21"}
        dateOfReturn={"2018-09-24"} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
