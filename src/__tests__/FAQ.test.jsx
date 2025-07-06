import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter initialEntries={["/faq"]}>
      <App />
    </MemoryRouter>
  );
}

test('renders FAQ page and toggles an answer', () => {
  setup();
  expect(
    screen.getByRole('heading', { name: /frequently asked questions/i })
  ).toBeInTheDocument();
  const firstQuestion = screen.getByRole('button', {
    name: /what types of documents can you notarize\?/i,
  });
  fireEvent.click(firstQuestion);
  expect(
    screen.getByText(/we can notarize a wide variety of documents/i)
  ).toBeInTheDocument();
});
