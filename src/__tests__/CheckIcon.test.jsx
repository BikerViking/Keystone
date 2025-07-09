import { render } from '@testing-library/react';
import CheckIcon from '../components/CheckIcon';

describe('CheckIcon component', () => {
  test('renders svg icon', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  test('has correct viewBox and path', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    const path = svg?.querySelector('path');
    // Verify path shape to ensure icon integrity across refactors
    expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
    expect(path).toHaveAttribute(
      'd',
      expect.stringContaining('M16.707 5.293'),
    );
  });
});
