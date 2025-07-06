import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function setup() {
  render(
    <MemoryRouter
      initialEntries={['/contact']}
      future={{ v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );
}

test('renders contact form', async () => {
  setup();
  expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Submitting this form does not guarantee an appointment/i)
  ).toBeInTheDocument();
  // appointment scheduling elements
  const checkbox = screen.getByLabelText(/i am requesting an appointment/i);
  let dateInput = screen.getByLabelText(/preferred date/i);
  let timeInput = screen.getByLabelText(/preferred time/i);
  expect(checkbox).toBeInTheDocument();
  expect(dateInput).toBeDisabled();
  expect(timeInput).toBeDisabled();

  // enable appointment fields
  await userEvent.click(checkbox);
  // re-query inputs after state update
  dateInput = screen.getByLabelText(/preferred date/i);
  timeInput = screen.getByLabelText(/preferred time/i);
  expect(dateInput).toBeEnabled();
  expect(dateInput).toBeRequired();
  expect(timeInput).toBeEnabled();
  expect(timeInput).toBeRequired();
});
