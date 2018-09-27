import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

class InputBar extends React.Component {
    render() {
        const { classes, label } = this.props;
        return (
            <div className="input-bar">
                <TextField
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
