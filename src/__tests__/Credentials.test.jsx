import { render, screen } from '@testing-library/react';
import { Credentials } from '../components';

test('displays NNA badge image with alt text', () => {
  render(<Credentials />);
  const badge = screen.getByAltText(/certified nna notary signing agent 2025 badge/i);
  expect(badge).toBeInTheDocument();
});

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

test('mobile portrait layout matches snapshot', () => {
  setViewport(375);
  const { container } = render(<Credentials />);
  expect(container.firstChild).toMatchSnapshot();
});

test('mobile landscape layout matches snapshot', () => {
  setViewport(812);
  const { container } = render(<Credentials />);
  expect(container.firstChild).toMatchSnapshot();
});

test('desktop layout matches snapshot', () => {
  setViewport(1280);
  const { container } = render(<Credentials />);
  expect(container.firstChild).toMatchSnapshot();
});
