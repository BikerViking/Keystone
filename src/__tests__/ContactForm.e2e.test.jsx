import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact';

function setViewport(width, height = 768) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
}

const viewports = [375, 1024];

describe('ContactForm end-to-end', () => {
  test.each(viewports)('simple message submission at %ipx', async (width) => {
    setViewport(width);
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Contact />
      </MemoryRouter>,
    );

    const submit = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submit);

    expect(await screen.findByText(/full name is required/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toHaveFocus();

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/document category/i), { target: { value: 'personal' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });

    fireEvent.click(submit);

    expect(await screen.findByRole('heading', { name: /thank you/i })).toHaveFocus();
    expect(screen.getByText(/your message has been received/i)).toBeInTheDocument();
  });

  test.each(viewports)('appointment request submission at %ipx', async (width) => {
    setViewport(width);
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Contact />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByLabelText(/i am requesting an appointment/i));
    const submit = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submit);

    expect(await screen.findByText(/full name is required/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toHaveFocus();

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/document category/i), { target: { value: 'business' } });
    fireEvent.change(screen.getByLabelText(/appointment type/i), { target: { value: 'remote' } });
    fireEvent.change(screen.getByLabelText(/preferred date/i), { target: { value: '2025-01-01' } });
    fireEvent.change(screen.getByLabelText(/preferred time/i), { target: { value: '13:30' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Need remote signing' } });

    fireEvent.click(submit);

    expect(await screen.findByRole('heading', { name: /thank you/i })).toHaveFocus();
    expect(screen.getByText(/your message has been received/i)).toBeInTheDocument();
  });
});
