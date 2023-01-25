import React, { FunctionComponent } from 'react';
import { Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';

export const Copyright: FunctionComponent = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://material-ui.com/" underline="hover">
                Foroi
            </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};
