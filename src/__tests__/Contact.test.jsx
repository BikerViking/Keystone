import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders contact form', () => {
  render(
    <MemoryRouter initialEntries={['/contact']} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});
