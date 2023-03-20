import React, { FunctionComponent, useState } from 'react';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import { IconButton } from '@mui/material';

export enum IncomeType {
    GROSS = 'gross',
    NET = 'net',
}

type Props = {
    handleIncomeTypeChange: (newIncomeType: IncomeType) => void;
    disabled: boolean;
};

export const SearchBarIcon: FunctionComponent<Props> = (props: Props) => {
    const [incomeType, setIncomeType] = useState(IncomeType.GROSS);
    const toggleIncomeType = (): void => {
        const newIncomeType = toggleIncomeTypeFor(incomeType);
        setIncomeType(newIncomeType);
        props.handleIncomeTypeChange(newIncomeType);
    };
    return (
        <IconButton
            data-testid="income-type-change-button"
            disabled={props.disabled}
            size="small"
            onClick={toggleIncomeType}
        >
            <EuroSymbolIcon />
            <div>{incomeType}</div>
        </IconButton>
    );
};

const toggleIncomeTypeFor = (incomeType: IncomeType): IncomeType =>
    incomeType == IncomeType.GROSS ? IncomeType.NET : IncomeType.GROSS;

export default SearchBarIcon;
