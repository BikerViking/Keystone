import { render, screen } from '@testing-library/react';
import { Credentials } from '../components';

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('Credentials component', () => {
  test('displays NNA badge image with alt text', () => {
    render(<Credentials />);
    const badge = screen.getByAltText(/nna certified notary signing agent 2025 badge/i);
    expect(badge).toBeInTheDocument();
  });

  test('badge uses expected attributes and classes', () => {
    render(<Credentials />);
    const badge = screen.getByAltText(/nna certified notary signing agent 2025 badge/i);
    const className = badge.getAttribute('class');
    expect(className).toEqual(expect.stringContaining('w-[220px]'));
    expect(className).toEqual(expect.stringContaining('h-[220px]'));
    expect(className).toEqual(expect.stringContaining('mx-auto'));
    expect(className).toEqual(expect.stringContaining('sm:ml-8'));
    expect(badge.getAttribute('draggable')).toBe('false');
  });

  test('layout container uses responsive flex classes', () => {
    render(<Credentials />);
    const badge = screen.getByAltText(/nna certified notary signing agent 2025 badge/i);
    const container = badge.parentElement;
    const className = container?.getAttribute('class') || '';
    expect(className).toEqual(expect.stringContaining('flex-col'));
    expect(className).toEqual(expect.stringContaining('sm:flex-row'));
  });

  const viewports = [320, 640, 1024, 1280];

  test.each(viewports)('renders correctly at %ipx viewport', (width) => {
    setViewport(width);
    render(<Credentials />);
    // Section should be accessible via its heading label
    const region = screen.getByRole('region', { name: /credentials/i });
    expect(region).toBeInTheDocument();
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });
});
