import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

test('renders not found message and navigation links', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  const scheduleLink = screen.getByRole('link', { name: /schedule appointment/i });
  expect(scheduleLink).toHaveAttribute('href', '/contact#contact');
  const homeLink = screen.getByRole('link', { name: /back to home/i });
  expect(homeLink).toHaveAttribute('href', '/');
});
