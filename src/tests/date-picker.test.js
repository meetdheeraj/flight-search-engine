import React from 'react';
import ReactDOM from 'react-dom';
import DatePickers from '../components/date-picker';

it('<DatePickers /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DatePickers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
