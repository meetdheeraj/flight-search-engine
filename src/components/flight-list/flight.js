import React, { Component } from 'react';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import FlightDetails from './flight-details';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import './flight-list.css';

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
                                    <Grid item xs={6}><FlightDetails /></Grid>
                                    <Grid item xs={6}><FlightDetails /></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>{"That large box"}</Grid>
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

export default withStyles(styles)(FlightComponent);
