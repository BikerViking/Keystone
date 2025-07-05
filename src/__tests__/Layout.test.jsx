import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../components/Layout';

function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <Layout />
      {children}
    </MemoryRouter>
  );
}

test('renders navbar and footer', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
