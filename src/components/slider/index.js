import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import './slider.css';

const styles = {
    root: {
        width: 290,
    },
};

class StepSlider extends React.Component {
    state = {
        value: 1000,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.handleSliderChange(value);
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className="price-slider-container">
            <div className="slider-text">{"Refine your search by price"}</div>
            <div className="slider-text">{`Price upto Rs. ${this.state.value}`}</div>
            <div className={classes.root}>
                <Slider value={value} min={0} max={10000} step={1} onChange={this.handleChange} />
            </div>
            </div>
        );
    }
}

StepSlider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);