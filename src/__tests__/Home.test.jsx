import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders home page heading and cta', () => {
  render(
    <MemoryRouter initialEntries={["/"]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /keystone notary group/i })).toBeInTheDocument();
  const cta = screen.getByRole('link', { name: /book appointment/i });
  expect(cta).toHaveAttribute('href', 'https://forms.gle/b1Xg8pYkZABk4wN96');
  const phoneLink = screen.getByRole('link', { name: /call or text/i });
  expect(phoneLink).toHaveAttribute('href', 'tel:2673099000');
  // Hero displays the parchment logo for brand recognition
  expect(
    screen.getByAltText(/keystone notary group logo on parchment/i),
  ).toBeInTheDocument();
});
