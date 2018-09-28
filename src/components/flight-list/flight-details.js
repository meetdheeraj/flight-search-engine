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
                    <Grid item xs={12}><text>{"A1-201"}</text></Grid>
                    <Grid item xs={12}><text>{"PNQ-DEL"}</text></Grid>
                    <Grid item xs={12}><text>{"Depart : 01-January-2018"}</text></Grid>
                    <Grid item xs={12}><text>{"Arrive : 01-January-2018"}</text></Grid>
                </Grid>
            </div>
        );
    }
}

export default FlightDetails;
