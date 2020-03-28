import { YearlySalary } from '../../models/salary';
import { IncomeType } from '../../components/SearchBarIcon';
import { convertSalaryToChartPoints } from '../chartutils';

const NET_SALARY_FOR_GROSS_ONE = 15;
const GROSS_SALARY_FOR_NET_ONE = 18;
const YEAR = '2016';

const YEARLY_SALARY: YearlySalary = {
    gross: [[{ net: NET_SALARY_FOR_GROSS_ONE, year: YEAR }]],
    net: [[{ gross: GROSS_SALARY_FOR_NET_ONE, year: YEAR }]],
};

const EMPTY_YEARLY_SALARY: YearlySalary = {
    gross: [],
    net: [],
};

test('It should correctly convert to net chart point', () => {
    const salaryPoints = convertSalaryToChartPoints(YEARLY_SALARY, 1, IncomeType.NET);
    expect(salaryPoints).toStrictEqual([{ salary: GROSS_SALARY_FOR_NET_ONE, year: YEAR }]);
});

test('It should correctly convert to gross chart point', () => {
    const salaryPoints = convertSalaryToChartPoints(YEARLY_SALARY, 1, IncomeType.GROSS);
    expect(salaryPoints).toStrictEqual([{ salary: NET_SALARY_FOR_GROSS_ONE, year: YEAR }]);
});

test('It should correctly convert to net chart points for two years', () => {
    const netSalaryFor2016 = 16;
    const netSalaryFor2017 = 34;
    const yearlySalary: YearlySalary = {
        gross: [
            [
                { net: netSalaryFor2016, year: '2016' },
                { net: netSalaryFor2017, year: '2017' },
            ],
        ],
        net: [],
    };
    const salaryPoints = convertSalaryToChartPoints(yearlySalary, 1, IncomeType.GROSS);
    expect(salaryPoints).toStrictEqual([
        { salary: netSalaryFor2016, year: '2016' },
        { salary: netSalaryFor2017, year: '2017' },
    ]);
});

test('It should handle empty yearly gross salary', () => {
    const salaryPoints = convertSalaryToChartPoints(EMPTY_YEARLY_SALARY, 1, IncomeType.GROSS);
    expect(salaryPoints).toStrictEqual([]);
});

test('It should handle empty yearly net salary', () => {
    const salaryPoints = convertSalaryToChartPoints(EMPTY_YEARLY_SALARY, 1, IncomeType.NET);
    expect(salaryPoints).toStrictEqual([]);
});

test('It should handle invalid salary request', () => {
    const ZERO_SALARY = 0;
    const salaryPoints = convertSalaryToChartPoints(EMPTY_YEARLY_SALARY, ZERO_SALARY, IncomeType.NET);
    const sumOfSalaries = salaryPoints.map(point => point.salary).reduce((a, b) => a + b);
    expect(sumOfSalaries).toBe(0);
    expect(salaryPoints).toHaveLength(15);
});
