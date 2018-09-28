import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';

class ButtonWithIcon extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="input-bar">
                <Button variant="contained" color="primary" className={classes.button}>
                    Send
                    <Send />
                </Button>
            </div>
        );
    }
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

export default withStyles(styles)(ButtonWithIcon);
