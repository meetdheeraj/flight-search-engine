import React, { Component } from 'react';
import InputBar from './../../components/input-bar';
import DatePickers from './../../components/date-picker';
import DropDown from './../../components/drop-down';
import ButtonWithIcon from './../../components/button-with-icon';

class OneWayTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        origin: "",
        destination: "",
        dateOfDeparture: "",
        dateOfReturn: "",
        noOfPassengers: ""
      }
    };
  }
  render() {
    return (
      <div className="one-way-tab">
        <InputBar onChange={this.getOrigin} value={this.state.search.origin} label="Enter origin city" />
        <InputBar onChange={this.getDestination} value={this.state.search.destination} label="Enter destination city" />
        <DatePickers onChange={this.getDateOfDeparture} value={this.state.search.dateOfDeparture} label="Departure date" />
        <DatePickers onChange={this.getDateOfReturn} value={this.state.search.dateOfReturn} label="Return date" />
        <DropDown onChange={this.getNoOfPassengers} value={this.state.search.noOfPassengers} label="Passengers" />
        <ButtonWithIcon search={this.state.search} onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit = () => {
    console.log("oneway tab*************", this.state.search)
    this.props.onSubmit(this.state.search);
  }

  getOrigin = (value) => {
    let search = this.state.search;
    search.origin = value;
    this.setState({ search: search })
  }

  getDestination = (value) => {
    let search = this.state.search;
    search.destination = value;
    this.setState({ search: search })
  }

  getDateOfDeparture = (value) => {
    let search = this.state.search;
    search.dateOfDeparture = value;
    this.setState({ search: search })
  }

  getDateOfReturn = (value) => {
    let search = this.state.search;
    search.dateOfReturn = value;
    this.setState({ search: search })
  }

  getNoOfPassengers = (value) => {
    let search = this.state.search;
    search.noOfPassengers = value;
    this.setState({ search: search })
  }
}

export default OneWayTabComponent;
