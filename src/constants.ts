import { ChartNetSalaryPoint } from './models/salary';

export const ZERO_SALARY: ChartNetSalaryPoint[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
].map(year => ({ year, salary: 0 }));
export const MIN_SALARY = 0;
