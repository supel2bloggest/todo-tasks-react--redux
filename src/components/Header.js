import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}))

function Header(props) {
    const classes = useStyles();
    return <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My Tasks
        </Typography>
      </Toolbar>
    </AppBar>
}

export default React.memo(Header);