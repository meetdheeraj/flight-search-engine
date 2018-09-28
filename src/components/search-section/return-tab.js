import React, { Component } from 'react';
import InputBar from './../../components/input-bar';
import DatePickers from './../../components/date-picker';
import DropDown from './../../components/drop-down';
import ButtonWithIcon from './../../components/button-with-icon';

class ReturnTabComponent extends Component {
  render() {
    return (
      <div className="one-way-tab">
        <InputBar label="Enter origin city"/>
        <InputBar label="Enter destination city"/>
        <DatePickers label="Departure date"/>
        <DropDown label="Passengers"/>
        <ButtonWithIcon />
      </div>
    );
  }
}

export default ReturnTabComponent;
