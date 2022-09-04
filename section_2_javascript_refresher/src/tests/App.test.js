import { render, screen } from '@testing-library/react';
import App from '../App';
import { sum } from '../services/sum';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('sum of 4 and 5 is 9', () => {
  expect(sum(4, 5)).toBe(9);
})
