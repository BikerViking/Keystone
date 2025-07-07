import { render, screen } from '@testing-library/react';
import { Credentials } from '../components';

test('displays NNA badge image with alt text', () => {
  render(<Credentials />);
  const badge = screen.getByAltText(/certified nna notary signing agent 2025 badge/i);
  expect(badge).toBeInTheDocument();
});
