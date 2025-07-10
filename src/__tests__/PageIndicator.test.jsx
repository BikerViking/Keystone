import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import PageIndicator from '../components/PageIndicator';

function setup(current = 0, onSelect = vi.fn()) {
  render(<PageIndicator pages={['/', '/about', '/contact']} current={current} onSelect={onSelect} />);
  return { onSelect };
}

test('renders a dot for each page', () => {
  setup();
  expect(screen.getAllByRole('button', { name: /go to page/i })).toHaveLength(3);
});

test('invokes callback on click', () => {
  const { onSelect } = setup(0);
  const button = screen.getAllByRole('button', { name: /go to page/i })[1];
  fireEvent.click(button);
  expect(onSelect).toHaveBeenCalledWith(1);
});
