import { YearlySalary, ChartNetSalaryPoint } from '../models/salary';
import { IncomeType } from '../components/SearchBarIcon';
import { ZERO_SALARY } from '../constants';

export const convertSalaryToChartPoints = (
    yearlySalary: YearlySalary,
    salary: number,
    incomeType: IncomeType,
): ChartNetSalaryPoint[] =>
    salary === 0 ? ZERO_SALARY : convertSalaryToChartPointsBasedOnIncomeType(yearlySalary, salary, incomeType);

const convertSalaryToChartPointsBasedOnIncomeType = (
    yearlySalary: YearlySalary,
    salary: number,
    incomeType: IncomeType,
): ChartNetSalaryPoint[] =>
    incomeType === IncomeType.GROSS
        ? convertGrossToNetChartPoints(yearlySalary, salary)
        : convertNetToGrossChartPoints(yearlySalary, salary);

const convertGrossToNetChartPoints = (yearlySalary: YearlySalary, salary: number): ChartNetSalaryPoint[] =>
    yearlySalary.gross[salary - 1]?.map(
        netForYear =>
            ({
                year: netForYear.year,
                salary: netForYear.net,
            } as ChartNetSalaryPoint),
    ) ?? [];

const convertNetToGrossChartPoints = (yearlySalary: YearlySalary, salary: number): ChartNetSalaryPoint[] =>
    yearlySalary.net[salary - 1]?.map(
        netForYear =>
            ({
                year: netForYear.year,
                salary: netForYear.gross,
            } as ChartNetSalaryPoint),
    ) ?? [];
