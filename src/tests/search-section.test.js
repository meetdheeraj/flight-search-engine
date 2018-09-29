import React from 'react';
import ReactDOM from 'react-dom';
import SearchSectionComponent from '../components/search-section';

it('<SearchSectionComponent /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchSectionComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});
