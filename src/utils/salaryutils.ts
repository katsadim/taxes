import { YearlySalary } from '../models/salary';
import { IncomeType } from '../components/SearchBarIcon';

const calculateMaxNetSalary = (yearlySalary: YearlySalary): number => yearlySalary.net.length;
const calculateMaxGrossSalary = (yearlySalary: YearlySalary): number => yearlySalary.gross.length;

export const getMaxSalaryForOppositeOfSelectedIncomeType = (
    yearlySalary: YearlySalary,
    incomeType: IncomeType,
): number =>
    incomeType === IncomeType.GROSS ? calculateMaxNetSalary(yearlySalary) : calculateMaxGrossSalary(yearlySalary);

export const getMaxSalaryForSelectedIncomeType = (yearlySalary: YearlySalary, incomeType: IncomeType): number =>
    incomeType === IncomeType.GROSS ? calculateMaxGrossSalary(yearlySalary) : calculateMaxNetSalary(yearlySalary);
