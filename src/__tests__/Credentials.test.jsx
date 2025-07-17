import { render, screen } from '@testing-library/react';
import { Credentials } from '../components';

function setViewport(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('Credentials component', () => {
  test('renders credential list', () => {
    render(<Credentials />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('includes a divider line', () => {
    render(<Credentials />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
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
