import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import './search-result-header.css';

class SearchResultHeader extends Component {
  render() {
    return (
      <div className="search-result-header">
      <Grid
            container
            spacing={8}
            direction="row"
          >
          <Grid item xs={8}>
        <text className="city-name">{this.props.origin}</text>
        <span className="keyboard-arrow-right"><KeyboardArrowRight /></span>
        <text className="city-name">{this.props.destination}</text>
        <KeyboardArrowRight />
        <text className="city-name">{this.props.origin}</text>
        </Grid>
        <Grid item xs={4}>
        <div className="departure-date"><text className="header">Depart : </text>{this.props.dateOfDeparture}</div>
        <div className="return-date"><text className="header">Return : </text>{this.props.dateOfReturn}</div>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default SearchResultHeader;
