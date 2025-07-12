import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import ChatWidget from '../components/ChatWidget';

// Chat bubble should open and display a response when a question is asked
describe('ChatWidget component', () => {
  test('opens chat window and displays answer', async () => {
    render(<ChatWidget />);

    // open chat
    fireEvent.click(screen.getByRole('button', { name: /ask a notary/i }));
    expect(screen.getByRole('dialog', { name: /ask a notary/i })).toBeInTheDocument();

    // ask known question
    fireEvent.change(screen.getByRole('textbox', { name: /type your question/i }), {
      target: { value: 'Do you offer mobile notary service?' },
    });
    fireEvent.submit(screen.getByRole('textbox', { name: /type your question/i }).closest('form'));

    expect(await screen.findByText(/mobile notary services throughout/i)).toBeInTheDocument();
  });

  test('closes when clicking outside', async () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole('button', { name: /ask a notary/i }));
    const [overlay] = screen.getAllByRole('button', { name: /close chat/i });
    fireEvent.click(overlay);
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog', { name: /ask a notary/i }));
  });

  test('renders greeting and suggestion buttons', () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole('button', { name: /ask a notary/i }));
    expect(screen.getByText(/virtual notary assistant/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /what documents can you notarize/i })).toHaveLength(1);
  });

  test('fallback response for unknown question', async () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole('button', { name: /ask a notary/i }));

    fireEvent.change(screen.getByRole('textbox', { name: /type your question/i }), {
      target: { value: 'How much wood could a woodchuck chuck?' },
    });
    fireEvent.submit(screen.getByRole('textbox', { name: /type your question/i }).closest('form'));

    expect(
      await screen.findByText(/great question! please call or text for a personalized answer./i),
    ).toBeInTheDocument();
  });

  test('shows typing indicator while generating reply', async () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole('button', { name: /ask a notary/i }));
    fireEvent.change(screen.getByRole('textbox', { name: /type your question/i }), {
      target: { value: 'Hello?' },
    });
    fireEvent.submit(screen.getByRole('textbox', { name: /type your question/i }).closest('form'));
    expect(screen.getByLabelText(/typing indicator/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByLabelText(/typing indicator/i));
  });
});
