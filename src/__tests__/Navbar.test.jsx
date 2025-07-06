import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../components';

test('toggles mobile menu', async () => {
  render(
    <MemoryRouter future={{ v7_relativeSplatPath: true }}>
      <Navbar />
    </MemoryRouter>
  );

  const button = screen.getByRole('button', { name: /toggle navigation/i });
  fireEvent.click(button);
  expect(screen.getByRole('button', { name: /close navigation/i })).toBeInTheDocument();
  // Mobile menu should render with a navigation region for accessibility
  expect(
    screen.getByRole('navigation', { name: /mobile navigation/i })
  ).toBeInTheDocument();

  const close = screen.getByRole('button', { name: /close navigation/i });
  fireEvent.click(close);
  await waitForElementToBeRemoved(close);
});
