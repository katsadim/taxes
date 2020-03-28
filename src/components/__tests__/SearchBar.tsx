import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../SearchBar';
import userEvent from '@testing-library/user-event';

const handleChange = jest.fn();
const renderAdornmentIcon = jest.fn();

const MAX = 10;
const MIN = 0;

const setup = () => {
    const utils = render(
        <SearchBar handleChange={handleChange} min={0} max={MAX} renderAdornmentIcon={renderAdornmentIcon} />,
    );
    const input = utils.getByLabelText('Salary');
    return { input, ...utils };
};

test('It should allow a value up to a max', () => {
    const { input } = setup();

    userEvent.type(input, MAX.toString());

    expect(input).toHaveValue(MAX);
});

test('It should now allow a value more than max', () => {
    const { input, container } = setup();

    userEvent.type(input, (MAX + 1).toString());

    expect(input).toHaveValue(1);
});
