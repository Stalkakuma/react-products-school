import { render } from '@testing-library/react';
import { Dashboard } from '../Dashboard';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

test('should render dashboard page', () => {
  renderWithRouter(<Dashboard />);
});
