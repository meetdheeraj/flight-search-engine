import React, { Component } from 'react';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import FlightDetails from './flight-details';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import './flight-list.css';
import Flight from '@material-ui/icons/Flight';
import Button from '@material-ui/core/Button';

class FlightComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="flight-row-container">
                <Paper className={classes.root} elevation={1}>
                    <Grid
                        container
                        spacing={8}
                        direction="row"
                    >
                        <Grid item xs={8}>
                            <Grid
                                container
                                spacing={24}
                                direction="row"
                            >
                                <Grid item xs={12}>{"That big price row"}</Grid>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        spacing={24}
                                        direction="row"
                                    >
                                        <Grid item xs={6}><FlightDetails flight={this.props.flight} /></Grid>
                                        <Grid item xs={6}><FlightDetails flight={this.props.flight} /></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                spacing={24}
                                direction="column">
                                <Grid item xs={6}><Flight fontSize='large' /></Grid>
                                <Grid item xs={6}>
                                <Button onClick={this.onSubmit} variant="contained" color="primary" className={classes.button}>Book  flight
                                </Button></Grid>
                            </Grid></Grid>
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
    button: {
        // margin: theme.spacing.unit,
    }
});

export default withStyles(styles)(FlightComponent);
