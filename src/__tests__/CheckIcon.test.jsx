import { render } from '@testing-library/react';
import CheckIcon from '../components/CheckIcon';

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('CheckIcon component', () => {
  test('renders svg icon', () => {
    const { container } = render(<CheckIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CheckIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('320px layout matches snapshot', () => {
    setViewport(320);
    const { asFragment } = render(<CheckIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
