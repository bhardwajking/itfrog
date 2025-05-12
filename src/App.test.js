import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user registration form', () => {
  render(<App />);
  const headingElement = screen.getByText(/User Registration Form/i);
  expect(headingElement).toBeInTheDocument();
});