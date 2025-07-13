import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter
      initialEntries={['/services']}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <App />
    </MemoryRouter>
  );
}

test('renders services list with updated offerings', () => {
  setup();
  // heading for page
  expect(
    screen.getByRole('heading', { level: 1, name: /services/i })
  ).toBeInTheDocument();
  // service items should display as simple list entries
  expect(screen.getByText(/after-hours & emergency notary/i)).toBeInTheDocument();
  expect(screen.getByText(/document certification/i)).toBeInTheDocument();
  expect(screen.getByText(/affidavits & sworn statements/i)).toBeInTheDocument();
});
