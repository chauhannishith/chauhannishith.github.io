import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This site is still under development./i);
  expect(linkElement).toBeInTheDocument();
});
