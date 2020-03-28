import React, { useState, FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import customData from '../../static/salaries10000.json';
import { YearlySalary } from '../models/salary';
import SalaryChart from '../components/SalaryChart';
import SearchBar from '../components/SearchBar';
import { Grid, Box } from '@material-ui/core';
import SearchBarIcon, { IncomeType } from '../components/SearchBarIcon';
import { MIN_SALARY } from '../constants';
import { Copyright } from '../components/Copyright';
import { convertSalaryToChartPoints } from '../utils/chartutils';
import { getMaxSalaryForSelectedIncomeType, getMaxSalaryForOppositeOfSelectedIncomeType } from '../utils/salaryutils';
import Link from '../components/Link';

const yearlySalary = (customData as unknown) as YearlySalary;

const Index: FunctionComponent = () => {
    const [searchTerm, setSearchTerm] = useState(0);
    const [selectedIncomeType, setSelectedIncomeType] = useState(IncomeType.GROSS);

    return (
        <React.StrictMode>
            <Container maxWidth="sm">
                <Box my={4}>
                    <Grid container spacing={4} justify="center">
                        <Grid container item xs={12} justify="center">
                            <Typography variant="h4" component="h1" gutterBottom>
                                Foroi
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <SearchBar
                                handleChange={val => setSearchTerm(val)}
                                max={getMaxSalaryForSelectedIncomeType(yearlySalary, selectedIncomeType)}
                                min={MIN_SALARY}
                                renderAdornmentIcon={() => (
                                    <SearchBarIcon
                                        disabled={
                                            searchTerm >
                                            getMaxSalaryForOppositeOfSelectedIncomeType(
                                                yearlySalary,
                                                selectedIncomeType,
                                            )
                                        }
                                        handleIncomeTypeChange={(type: IncomeType) => setSelectedIncomeType(type)}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid container item xs={12}>
                            <SalaryChart
                                points={convertSalaryToChartPoints(yearlySalary, searchTerm, selectedIncomeType)}
                            />
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <Link to="/about" color="secondary">
                                Go to the about page
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Copyright />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.StrictMode>
    );
};

export default Index;
