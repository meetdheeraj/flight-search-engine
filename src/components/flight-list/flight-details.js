import React, { Component } from 'react';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';

class FlightDetails extends Component {
    render() {
        return (
            <div className="App">
                <Grid
                    container
                    spacing={8}
                    direction="row"
                >
                    <Grid item xs={12}><text>{this.props.flight.flightName}</text></Grid>
                    <Grid item xs={12}><text>{`${this.props.flight.origin} - ${this.props.flight.destination}`}</text></Grid>
                    <Grid item xs={12}><text>{`Depart: ${this.props.flight.departureTime}`}</text></Grid>
                    <Grid item xs={12}><text>{`Arrive: ${this.props.flight.arrivalTime}`}</text></Grid>
                </Grid>
            </div>
        );
    }
}

export default FlightDetails;
