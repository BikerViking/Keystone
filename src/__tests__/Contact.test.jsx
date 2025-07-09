import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter initialEntries={['/contact']} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </MemoryRouter>,
  );
}

test('shows validation messages on blur and submit', async () => {
  setup();
  const user = userEvent.setup();
  const nameInput = screen.getByLabelText(/full name/i);
  await user.click(nameInput);
  await user.tab();
  expect(screen.getByText(/full name is required/i)).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: /send message/i });
  const emailInput = screen.getByLabelText(/email address/i);
  await user.click(submitButton);
  expect(emailInput).toHaveAttribute('aria-invalid', 'true');
  expect(await screen.findByText(/document category is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
});

test('submits successfully with valid data', async () => {
  setup();
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/full name/i), 'Jane Doe');
  await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
  await user.type(screen.getByLabelText(/phone number/i), '1234567890');
  await user.selectOptions(screen.getByLabelText(/document category/i), 'personal');
  await user.type(screen.getByLabelText(/message/i), 'Hello');
  await user.click(screen.getByRole('button', { name: /send message/i }));
  expect(screen.getByRole('heading', { name: /thank you/i })).toBeInTheDocument();
});
