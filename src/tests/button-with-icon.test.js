import React from 'react';
import ReactDOM from 'react-dom';
import ButtonWithIcon from '../components/button-with-icon';

it('<ButtonWithIcon /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonWithIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
