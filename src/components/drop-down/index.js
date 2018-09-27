import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';

class DropDown extends React.Component {
    state = {
        valueRange: '',
    };
    render() {
        const { classes, label } = this.props;
        return (
            <div className="input-bar">
                <TextField
                    select
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label={label}
                    value={this.state.valueRange}
                    onChange={this.handleChange('valueRange')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                >
                    {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        );
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
});

const ranges = Array.from({ length: 10 }, (v, k) => {
    return {
        value: k + 1,
        label: k + 1
    }
});

export default withStyles(styles)(DropDown);
