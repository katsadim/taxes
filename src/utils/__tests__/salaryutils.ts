import { YearlySalary } from '../../models/salary';
import { IncomeType } from '../../components/SearchBarIcon';
import { getMaxSalaryForSelectedIncomeType, getMaxSalaryForOppositeOfSelectedIncomeType } from '../salaryutils';

const YEARLY_SALARY: YearlySalary = {
    gross: [[{ net: 1, year: '2015' }]],
    net: [[{ gross: 1, year: '2015' }], [{ gross: 3, year: '2015' }]],
};

const EMPTY_YEARLY_SALARY: YearlySalary = {
    gross: [],
    net: [],
};

test('It should handle empty yearly salary for selected gross income type when querying for max salary', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForSelectedIncomeType(EMPTY_YEARLY_SALARY, IncomeType.GROSS);
    expect(maxSalaryForSelectedIncomeType).toBe(0);
});

test('It should handle empty yearly salary for selected net income type when querying for max salary', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForSelectedIncomeType(EMPTY_YEARLY_SALARY, IncomeType.NET);
    expect(maxSalaryForSelectedIncomeType).toBe(0);
});

test('It should correctly return the correct max salary for selected gross income', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForSelectedIncomeType(YEARLY_SALARY, IncomeType.GROSS);
    expect(maxSalaryForSelectedIncomeType).toBe(1);
});

test('It should correctly return the correct max salary for selected net income', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForSelectedIncomeType(YEARLY_SALARY, IncomeType.NET);
    expect(maxSalaryForSelectedIncomeType).toBe(2);
});

test('It should handle empty yearly salary for opposite of selected gross income type when querying for max salary', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForOppositeOfSelectedIncomeType(
        EMPTY_YEARLY_SALARY,
        IncomeType.GROSS,
    );
    expect(maxSalaryForSelectedIncomeType).toBe(0);
});

test('It should handle empty yearly salary for opposite of  selected net income type when querying for max salary', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForOppositeOfSelectedIncomeType(
        EMPTY_YEARLY_SALARY,
        IncomeType.NET,
    );
    expect(maxSalaryForSelectedIncomeType).toBe(0);
});

test('It should correctly return the correct max salary for opposite of selected gross income', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForOppositeOfSelectedIncomeType(YEARLY_SALARY, IncomeType.GROSS);
    expect(maxSalaryForSelectedIncomeType).toBe(2);
});

test('It should correctly return the correct max salary for opposite of selected net income', () => {
    const maxSalaryForSelectedIncomeType = getMaxSalaryForOppositeOfSelectedIncomeType(YEARLY_SALARY, IncomeType.NET);
    expect(maxSalaryForSelectedIncomeType).toBe(1);
});
