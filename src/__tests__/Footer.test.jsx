import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('displays current year', () => {
  render(<Footer />);
  const year = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
});
