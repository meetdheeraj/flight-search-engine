import React from 'react';
import ReactDOM from 'react-dom';
import SearchTabComponent from '../components/search-section/search-tab';

it('<SearchTabComponent /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchTabComponent showReturn={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
