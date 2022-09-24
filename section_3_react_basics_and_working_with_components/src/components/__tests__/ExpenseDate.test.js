import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExpenseDate from '../Expenses/ExpenseDate';

describe('Test ExpenseDate Component', () => {
  test('should render year, month, and Day', () => {
    const expected = [/March/i, /28/, /2021/];
    const date = new Date(2021, 2, 28); 
    render(<ExpenseDate date={date} />)
    expected.forEach(dateItem => {
      expect(screen.getByText(dateItem)).toBeInTheDocument();
    });
  });
  
});