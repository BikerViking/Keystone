import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from '../components';

describe('Hero component', () => {
  test('renders call to action links', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /keystone notary group, llc/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /schedule appointment/i }),
    ).toHaveAttribute('href', '/contact#contact');
    expect(
      screen.getByRole('link', { name: /call or text 267-309-9000/i }),
    ).toHaveAttribute('href', 'tel:2673099000');
    expect(
      screen.getByAltText(/keystone notary group logo on parchment/i),
    ).toBeInTheDocument();
  });
});
