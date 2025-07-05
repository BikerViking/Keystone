import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('toggles mobile menu', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const button = screen.getByLabelText(/toggle navigation/i);
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
