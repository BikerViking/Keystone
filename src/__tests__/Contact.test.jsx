import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter
      initialEntries={['/contact']}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <App />
    </MemoryRouter>
  );
}

test('renders contact form and validates fields', async () => {
  setup();
  const user = userEvent.setup();
  expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Submitting this form does not guarantee an appointment/i)
  ).toBeInTheDocument();

  const checkbox = screen.getByLabelText(/i am requesting an appointment/i);
  const categorySelect = screen.getByLabelText(/document category/i);
  expect(categorySelect).toBeInTheDocument();
  let typeSelect = screen.getByLabelText(/appointment type/i);
  let dateInput = screen.getByLabelText(/preferred date/i);
  let timeInput = screen.getByLabelText(/preferred time/i);
  expect(typeSelect).toBeDisabled();
  expect(dateInput).toBeDisabled();
  expect(timeInput).toBeDisabled();

  const submitButton = screen.getByRole('button', { name: /send message/i });
  await user.click(submitButton);
  expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email address is required/i)).toBeInTheDocument();
  expect(screen.getByText(/document category is required/i)).toBeInTheDocument();
  expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  expect(screen.queryByText(/preferred date is required/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/appointment type is required/i)).not.toBeInTheDocument();

  // enable appointment fields
  await user.click(checkbox);
  typeSelect = screen.getByLabelText(/appointment type/i);
  dateInput = screen.getByLabelText(/preferred date/i);
  timeInput = screen.getByLabelText(/preferred time/i);
  expect(typeSelect).toBeEnabled();
  expect(typeSelect).toBeRequired();
  expect(dateInput).toBeEnabled();
  expect(dateInput).toBeRequired();
  expect(timeInput).toBeEnabled();
  expect(timeInput).toBeRequired();

  await user.click(submitButton);
  expect(screen.getByText(/appointment type is required/i)).toBeInTheDocument();
  expect(screen.getByText(/preferred date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/preferred time is required/i)).toBeInTheDocument();
});
