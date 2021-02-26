import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coding challenge footer text', () => {
  render(<App />);
  const footerElement = screen.getByText(/Coding Challenge by Felix Schliemann/i);
  expect(footerElement).toBeInTheDocument();
});
