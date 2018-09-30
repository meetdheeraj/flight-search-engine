import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';

class ButtonWithIcon extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="input-bar">
                <Button onClick={this.onSubmit} variant="contained" color="primary" className={classes.button}>
                    Send&nbsp;&nbsp;
                    <Send />
                </Button>
            </div>
        );
    }

    onSubmit = () => {
        this.props.onSubmit();
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
