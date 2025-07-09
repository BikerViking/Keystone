import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from '../components';

describe('Hero component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /keystone notary group, llc/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
