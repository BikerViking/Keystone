import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders about page content', () => {
  render(
    <MemoryRouter
      initialEntries={['/about']}
      future={{ v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
  expect(
    screen.getByText(/Pennsylvania-commissioned mobile notary company/i)
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/');
});
