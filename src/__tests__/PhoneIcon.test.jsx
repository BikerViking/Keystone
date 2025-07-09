import { render } from '@testing-library/react';
import PhoneIcon from '../components/PhoneIcon';

describe('PhoneIcon component', () => {
  test('renders phone icon svg', () => {
    const { container } = render(<PhoneIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  test('has correct viewBox', () => {
    const { container } = render(<PhoneIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
});
