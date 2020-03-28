import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBarIcon, { IncomeType } from '../SearchBarIcon';

const handleIncomeTypeChange = jest.fn();

const setup = () => {
    const utils = render(<SearchBarIcon handleIncomeTypeChange={handleIncomeTypeChange} disabled={false} />);
    const input = utils.getByTestId('income-type-change-button');
    return { input, ...utils };
};

test('Default Income Type is gross', () => {
    const { getByText } = setup();

    expect(getByText(IncomeType.GROSS)).not.toBeNull();
});

test('Toggles to net income type when clicked', () => {
    const { getByText, input } = setup();

    fireEvent.click(input);

    expect(handleIncomeTypeChange).toHaveBeenCalledWith(IncomeType.NET);
    expect(getByText(IncomeType.NET)).not.toBeNull();
});

test('Toggles to gross income type when clicked twice', () => {
    const { getByText, input } = setup();

    fireEvent.click(input);
    fireEvent.click(input);

    expect(handleIncomeTypeChange).toHaveBeenCalledWith(IncomeType.GROSS);
    expect(getByText(IncomeType.GROSS)).not.toBeNull();
});

test('Button should be disabled', () => {
    const { getByTestId } = render(<SearchBarIcon handleIncomeTypeChange={handleIncomeTypeChange} disabled={true} />);

    expect(getByTestId('income-type-change-button')).toBeDisabled();
});
