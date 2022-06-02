/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Key } from './Key';

describe('Given the component Key', () => {
    const mockKey = 'test string';

    describe('When calling it', () => {
        test('Then it should be rendered', () => {
            // Arrange
            render(<Key item={mockKey} />);

            // Assert
            expect(screen.getByText(mockKey)).toBeInTheDocument();
        });
    });
});
