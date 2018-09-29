import React from 'react';
import ReactDOM from 'react-dom';
import InputBar from '../components/input-bar';

it('<InputBar /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
