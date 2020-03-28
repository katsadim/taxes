import React, { FunctionComponent, useState } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';

type Props = {
    handleChange: (searchTerm: number) => void;
    max: number;
    min: number;
    renderAdornmentIcon: () => JSX.Element;
};

export const SearchBar: FunctionComponent<Props> = (props: Props) => {
    const [error, setError] = useState(false);
    const [prevValue, setPrevValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPrevValue(event.target.value);
        props.handleChange(Number(event.target.value));
    };

    const validateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (Number(event.target.value) > props.max || Number(event.target.value) < props.min) {
            event.target.value = prevValue;
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <TextField
            id="salary"
            label="Salary"
            variant="outlined"
            type="number"
            onChange={handleChange}
            onInput={validateInput}
            error={error}
            helperText={error ? `Should be between 0 and ${props.max}` : ''}
            InputProps={{
                endAdornment: <InputAdornment position="end">{props.renderAdornmentIcon()}</InputAdornment>,
            }}
            fullWidth
        />
    );
};

export default SearchBar;
