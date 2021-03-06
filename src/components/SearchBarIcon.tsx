import React, { FunctionComponent, useState } from 'react';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import { IconButton } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconButton: {
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: '45px',
        },
    }),
);

export enum IncomeType {
    GROSS = 'gross',
    NET = 'net',
}

type Props = {
    handleIncomeTypeChange: (newIncomeType: IncomeType) => void;
    disabled: boolean;
};

export const SearchBarIcon: FunctionComponent<Props> = (props: Props) => {
    const classes = useStyles();
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
            classes={{ label: classes.iconButton }}
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
