import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter initialEntries={["/faq"]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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

test('links to price list from FAQ', () => {
  setup();
  const priceQuestion = screen.getByRole('button', {
    name: /where can i see your current rates\?/i,
  });
  fireEvent.click(priceQuestion);
  const link = screen.getByRole('link', { name: /^here$/i });
  expect(link).toHaveAttribute('href', '/prices');
});
