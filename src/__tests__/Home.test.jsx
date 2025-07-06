import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders home page heading and cta', () => {
  render(
    <MemoryRouter initialEntries={["/"]} future={{ v7_relativeSplatPath: true }}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /keystone notary group/i })).toBeInTheDocument();
  const cta = screen.getByRole('link', { name: /schedule appointment/i });
  expect(cta).toHaveAttribute('href', '/contact#contact');
  // Logo should render with accessible alt text
  expect(screen.getByAltText(/keystone notary group logo/i)).toBeInTheDocument();
});
