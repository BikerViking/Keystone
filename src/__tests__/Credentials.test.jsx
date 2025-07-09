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

  test('badge uses responsive sizing classes', () => {
    render(<Credentials />);
    const badge = screen.getByAltText(/certified nna notary signing agent 2025 badge/i);
    const className = badge.getAttribute('class');
    expect(className).toEqual(expect.stringContaining('h-20'));
    expect(className).toEqual(expect.stringContaining('w-auto'));
    expect(className).toEqual(expect.stringContaining('sm:h-24'));
    expect(className).toEqual(expect.stringContaining('flex-shrink-0'));
    expect(className).toEqual(expect.stringContaining('translate-y-[62.5%]'));
    expect(className).toEqual(expect.stringContaining('scale-125'));
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
