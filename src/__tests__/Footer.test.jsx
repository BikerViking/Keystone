import { render, screen } from '@testing-library/react';
import { Footer } from '../components';

describe('Footer component', () => {
  test('displays current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  test('has landmark role', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('shows clickable contact links', () => {
    render(<Footer />);
    const phone = screen.getByRole('link', { name: /\(267\) 309-9000/i });
    expect(phone).toHaveAttribute('href', 'tel:2673099000');
    const email = screen.getByRole('link', { name: /info@keystonenotarygroup.com/i });
    expect(email).toHaveAttribute('href', 'mailto:info@keystonenotarygroup.com');
  });
});
