import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter initialEntries={["/prices"]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </MemoryRouter>
  );
}

test('renders price list with notarial fees', () => {
  setup();
  expect(screen.getByRole('heading', { name: /fee schedule/i })).toBeInTheDocument();
  expect(screen.getByText(/acknowledgment \(first signature\)/i)).toBeInTheDocument();
});
