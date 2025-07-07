import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

test('renders not found message and link to home', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  const link = screen.getByRole('link', { name: /back to home/i });
  expect(link).toHaveAttribute('href', '/');
});
