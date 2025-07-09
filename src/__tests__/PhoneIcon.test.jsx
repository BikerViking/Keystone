import { render } from '@testing-library/react';
import PhoneIcon from '../components/PhoneIcon';

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('PhoneIcon component', () => {
  test('renders phone icon svg', () => {
    const { container } = render(<PhoneIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<PhoneIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('320px layout matches snapshot', () => {
    setViewport(320);
    const { asFragment } = render(<PhoneIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
