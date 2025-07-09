import { render, screen } from '@testing-library/react';
import { Credentials } from '../components';

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('Credentials component', () => {
  test('displays NNA badge image with alt text', () => {
    render(<Credentials />);
    const badge = screen.getByAltText(/certified nna notary signing agent 2025 badge/i);
    expect(badge).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Credentials />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('320px layout matches snapshot', () => {
    setViewport(320);
    const { container } = render(<Credentials />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('640px layout matches snapshot', () => {
    setViewport(640);
    const { container } = render(<Credentials />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('1024px layout matches snapshot', () => {
    setViewport(1024);
    const { container } = render(<Credentials />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('1280px layout matches snapshot', () => {
    setViewport(1280);
    const { container } = render(<Credentials />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
