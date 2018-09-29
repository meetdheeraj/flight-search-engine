import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    render() {
        const { classes, label } = this.props;
        return (
            <div className="input-bar">
                <TextField
                    value={this.state.value}
                    onChange={this.onChange}
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label={label}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
            </div>
        );
    }

    onChange = (event) => {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    }
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

export default withStyles(styles)(InputBar);
