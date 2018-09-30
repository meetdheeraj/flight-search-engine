import React, { Component } from 'react';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import FlightDetails from './flight-details';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import './flight-list.css';
import Flight from '@material-ui/icons/Flight';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import FlightBookedDialogue from './flight-booked-dialogue';

class FlightComponent extends Component {
    state = {
        open: false
    };
    render() {
        const { classes } = this.props;
        return (
            <div className="flight-row-container">
                <Paper className={`${classes.root} flight-component-row`} elevation={1}>
                    <Grid
                        container
                        spacing={8}
                        direction="row"
                    >
                        <Grid item md={8}>
                            <Grid
                                container
                                spacing={24}
                                direction="row"
                            >
                                <Grid item md={12} ><text className="flight-price" >{`Rs. ${this.getTotalPrice(this.props.oneWayFlight, this.props.returnFlight)}`}</text></Grid>
                                <Grid item md={12}>
                                    <Grid
                                        container
                                        spacing={24}
                                        direction="row"
                                    >
                                        <Grid item md={6}><FlightDetails flight={this.props.oneWayFlight} /></Grid>
                                        <Grid item md={6}>{this.props.returnFlight && <FlightDetails flight={this.props.returnFlight} />}</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4}>
                            <Grid
                                container
                                spacing={24}
                                direction="column"
                                alignContent="flex-end">
                                <Grid item md={6}><Flight className="flight-icon" fontSize='large' /></Grid>
                                <Grid item md={6}>
                                    <Button onClick={this.handleClickOpen} variant="contained" color="primary" className={classes.button}>Book  flight
                                </Button>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Booking Successful!"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Your booking was successful.
            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                                Okay, Thanks!
            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                            </Grid></Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }

    getTotalPrice = (oneWayFlight, returnFlight) => {
        if (oneWayFlight && returnFlight) {
            return Number(oneWayFlight.price) + Number(returnFlight.price);
        } else if (oneWayFlight) {
            return Number(oneWayFlight.price);
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
}

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

export default withStyles(styles)(FlightComponent);
