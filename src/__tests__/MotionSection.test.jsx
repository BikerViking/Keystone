import { render, screen } from '@testing-library/react';
import { MotionSection } from '../components';

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('MotionSection component', () => {
  test('renders children text', () => {
    render(<MotionSection>Hello</MotionSection>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<MotionSection>Hello</MotionSection>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('320px layout matches snapshot', () => {
    setViewport(320);
    const { asFragment } = render(<MotionSection>Hello</MotionSection>);
    expect(asFragment()).toMatchSnapshot();
  });
});
