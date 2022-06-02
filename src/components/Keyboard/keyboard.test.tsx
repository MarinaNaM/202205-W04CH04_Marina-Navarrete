/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Keyboard } from './Keyboard';

describe('Given the component Keyboard', () => {
    const mockKeyboard = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        'delete',
    ];

    describe('When passing an array of strings', () => {
        test('Then a number of numbers should be in the document', () => {
            render(<Keyboard item={mockKeyboard} />);

            expect(screen.getAllByRole('listitem')).toHaveLength(
                mockKeyboard.length
            );

            mockKeyboard.forEach((item) => {
                expect(screen.getByText(item)).toBeInTheDocument();
            });
        });
    });
});
