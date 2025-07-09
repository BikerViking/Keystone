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

  test('matches snapshot', () => {
    const { asFragment } = render(<ScrollToTopButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
