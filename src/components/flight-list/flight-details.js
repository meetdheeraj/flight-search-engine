import React, { Component } from 'react';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import './flight-list.css';

class FlightDetails extends Component {
    render() {
        return (
            <div className="flight-details-container">
                <Grid
                    container
                    spacing={8}
                    direction="row"
                    justify="flex-start"
                >
                    <Grid item md={12}><text className="flight-name">{this.props.flight.flightName}</text></Grid>
                    <Grid item md={12}><text className="flight-origin-destination">{`${this.props.flight.origin} - ${this.props.flight.destination}`}</text></Grid>
                    <Grid item md={12}><text>{`Depart: ${this.props.flight.departureTime}`}</text></Grid>
                    <Grid item md={12}><text>{`Arrive: ${this.props.flight.arrivalTime}`}</text></Grid>
                </Grid>
            </div>
        );
    }
}

export default FlightDetails;
