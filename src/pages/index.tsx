import React, { useState, FunctionComponent } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import customData from '../../static/salaries10000.json';
import { YearlySalary } from '../models/salary';
import SalaryChart from '../components/SalaryChart';
import SearchBar from '../components/SearchBar';
import { Grid, Box } from '@mui/material';
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
            <Container maxWidth="md">
                <Box my={4}>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid container item xl={12} justifyContent="center">
                            <Typography variant="h4" component="h1" gutterBottom>
                                Forolagnia
                            </Typography>
                        </Grid>
                        <Grid container item xl={12} justifyContent="center">
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
                        <Grid container item xl={12}>
                            <SalaryChart
                                points={convertSalaryToChartPoints(yearlySalary, searchTerm, selectedIncomeType)}
                            />
                        </Grid>
                        <Grid container item xl={12} justifyContent="center">
                            <Link to="/about" color="secondary">
                                Go to the about page
                            </Link>
                        </Grid>
                        <Grid item xl={12}>
                            <Copyright />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.StrictMode>
    );
};

export default Index;
