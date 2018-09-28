import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import OneWayTabComponent from './one-way-tab';
import ReturnTabComponent from './return-tab';
import StepSlider from './../slider'

class SearchSectionComponent extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render() {
        return (
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
                    <TabContainer><OneWayTabComponent /></TabContainer>
                    <TabContainer><ReturnTabComponent /></TabContainer>
                </SwipeableViews>
                <StepSlider />

            </div>
        );
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
