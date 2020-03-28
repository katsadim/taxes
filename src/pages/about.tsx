import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';
import { Copyright } from '../components/Copyright';
import { Grid } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';

export default function About() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Grid container spacing={4} justify="center">
                    <Grid container item xs={12} justify="center">
                        <Typography variant="h4" component="h1" gutterBottom>
                            After tax Calc
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Typography variant="body1" component="h1" gutterBottom>
                            Alright here we are with a nice salary tax calculator. The difference from traditional
                            calculators, is that it allows you to check salary tax progression as years pass by.
                        </Typography>
                        <Typography variant="body1" component="h1" gutterBottom>
                            Somebody could suggest that:
                            <ul>
                                <li>React is overkill given the small size of he project</li>
                                <li>
                                    and that an equation could be used for the calculation of the salary instead of
                                    having a flat file of salaries
                                </li>
                            </ul>
                            But this project was done solely for the pleasure of learning new stuff! I had the
                            opportunity to work with{' '}
                            <MuiLink color="secondary" href="https://reactjs.org/">
                                React
                            </MuiLink>
                            ,{' '}
                            <MuiLink color="secondary" href="https://github.com/testing-library/react-testing-library">
                                React Testing Library
                            </MuiLink>{' '}
                            and{' '}
                            <MuiLink color="secondary" href="https://github.com/puppeteer/puppeteer">
                                Puppeteer
                            </MuiLink>
                            !
                        </Typography>
                        <Typography variant="body1" component="h1" gutterBottom>
                            The intention is to host several EU countries so somebody can compare and contrast salaries
                            across EU.
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Link to="/" color="secondary">
                            Go to the main page
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Copyright />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
