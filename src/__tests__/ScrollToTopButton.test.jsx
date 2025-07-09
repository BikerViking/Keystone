import { fireEvent, render, screen } from '@testing-library/react';
import ScrollToTopButton from '../components/ScrollToTopButton';

describe('ScrollToTopButton component', () => {
  // The button should appear once the user has scrolled down the page
  test('shows button after scrolling', () => {
    render(<ScrollToTopButton />);
    // Initially hidden
    expect(
      screen.queryByRole('button', { name: /scroll to top/i }),
    ).not.toBeInTheDocument();

    // Simulate scrolling past the threshold
    window.scrollY = 400;
    fireEvent.scroll(window);

    expect(
      screen.getByRole('button', { name: /scroll to top/i }),
    ).toBeInTheDocument();
  });

  test('scrolls to top when clicked', () => {
    const original = window.scrollTo;
    window.scrollTo = vi.fn();
    render(<ScrollToTopButton />);
    window.scrollY = 400;
    fireEvent.scroll(window);
    const button = screen.getByRole('button', { name: /scroll to top/i });
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    window.scrollTo = original;
  });
});
