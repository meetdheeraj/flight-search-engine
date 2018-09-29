import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import './search-result-header.css';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

class SearchResultHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="search-result-header">
      <Paper className={`${classes.root} search-result`} elevation={4}>
      <Grid
            container
            spacing={8}
            direction="row"
          >
          <Grid item md={8}>
        <text className="city-name">{this.props.origin}</text>
        <span className="keyboard-arrow-right"><KeyboardArrowRight /></span>
        <text className="city-name">{this.props.destination}</text>
        <span className="keyboard-arrow-right"><KeyboardArrowRight /></span>
        <text className="city-name">{this.props.origin}</text>
        </Grid>
        <Grid item md={4}>
        <div className="departure-date"><text className="header">Depart : </text>{this.props.dateOfDeparture}</div>
        {this.props.dateOfReturn && <div className="return-date"><text className="header">Return : </text>{this.props.dateOfReturn}</div>}
        </Grid>
        </Grid>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(SearchResultHeader);
