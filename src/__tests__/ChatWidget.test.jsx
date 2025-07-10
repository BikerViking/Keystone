import { fireEvent, render, screen } from '@testing-library/react';
import ChatWidget from '../components/ChatWidget';

// Chat bubble should open and display a response when a question is asked
describe('ChatWidget component', () => {
  test('opens chat window and displays answer', () => {
    render(<ChatWidget />);

    // open chat
    fireEvent.click(screen.getByRole('button', { name: /ask a notary/i }));
    expect(screen.getByRole('dialog', { name: /ask a notary/i })).toBeInTheDocument();

    // ask known question
    fireEvent.change(screen.getByRole('textbox', { name: /type your question/i }), {
      target: { value: 'Do you offer mobile notary service?' },
    });
    fireEvent.submit(screen.getByRole('textbox', { name: /type your question/i }).closest('form'));

    expect(screen.getByText(/mobile notary services throughout/i)).toBeInTheDocument();
  });

  test('fallback response for unknown question', () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole('button', { name: /ask a notary/i }));

    fireEvent.change(screen.getByRole('textbox', { name: /type your question/i }), {
      target: { value: 'How much wood could a woodchuck chuck?' },
    });
    fireEvent.submit(screen.getByRole('textbox', { name: /type your question/i }).closest('form'));

    expect(
      screen.getByText(/great question! please call or text for a personalized answer./i),
    ).toBeInTheDocument();
  });
});
