import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import SearchTabComponent from './search-tab';
import StepSlider from './../slider';
import './search-section.css';
import Grid from '@material-ui/core/Grid';

class SearchSectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    handleSliderChange = (value) => {
        this.props.handleSliderChange(value);
    };

    render() {
        return (
            <Grid
            container
            spacing={8}
           >
           <Grid item xs={12}>
            <div className="search-section-container">
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                >
                    <Tab label="One way" >Tab 1</Tab>
                    <Tab label="Return" >Tab 2</Tab>
                </Tabs>
                <SwipeableViews
                    axis={'x-reverse'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer><SearchTabComponent showReturn={false} onSubmit={this.onSubmit} /></TabContainer>
                    <TabContainer><SearchTabComponent showReturn={true} onSubmit={this.onSubmit} /></TabContainer>
                </SwipeableViews>
                <StepSlider handleSliderChange={this.handleSliderChange} />

            </div>
            </Grid>
            </Grid>
        );
    }

    onSubmit = (search) => {
        this.props.searchFlights(search);
    }
}

function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

export default SearchSectionComponent;
