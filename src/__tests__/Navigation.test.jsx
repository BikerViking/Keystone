import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
}

test('navigates to about page', () => {
  setup();
  fireEvent.click(screen.getByRole('link', { name: /about/i }));
  expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
});
