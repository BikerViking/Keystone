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

beforeEach(() => {
  Object.defineProperty(navigator, 'maxTouchPoints', { configurable: true, value: 1 });
});

test('navigates to about page', () => {
  setup();
  fireEvent.click(screen.getAllByRole('link', { name: /^about$/i })[0]);
  expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
});

test('swipe left from home navigates to about page', async () => {
  setup();
  const main = screen.getByRole('main');
  fireEvent.touchStart(main, { touches: [{ clientX: 200, clientY: 0 }] });
  fireEvent.touchMove(main, { touches: [{ clientX: 50, clientY: 0 }] });
  fireEvent.touchEnd(main, { changedTouches: [{ clientX: 10, clientY: 0 }] });
  expect(await screen.findByRole('heading', { name: /about us/i })).toBeInTheDocument();
});

