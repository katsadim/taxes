import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';

export const Copyright: FunctionComponent = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Foroi
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};
