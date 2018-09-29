import React from 'react';
import ReactDOM from 'react-dom';
import DropDown from '../components/drop-down';

it('<DropDown /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DropDown />, div);
  ReactDOM.unmountComponentAtNode(div);
});
