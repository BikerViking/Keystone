import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter initialEntries={["/"]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </MemoryRouter>
  );
}

test('navigates to about page', () => {
  setup();
  fireEvent.click(screen.getAllByRole('link', { name: /^about$/i })[0]);
  expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
});
