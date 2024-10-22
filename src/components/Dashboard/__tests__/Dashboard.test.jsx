import { render } from '@testing-library/react';
import { Dashboard } from '../Dashboard';
import { BrowserRouter, Link } from 'react-router-dom';

const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

test('should render dashboard page', () => {
  renderWithRouter(<Dashboard />);
  const { container } = renderWithRouter(<Dashboard />);
  expect(container.innerHTML).toMatch('Welcome');
});
