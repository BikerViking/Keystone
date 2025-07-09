import { render, screen } from '@testing-library/react';
import { MotionSection } from '../components';

describe('MotionSection component', () => {
  test('renders children text', () => {
    render(<MotionSection>Hello</MotionSection>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('acts as named region when labelled', () => {
    render(
      <MotionSection aria-label="Example">Hello</MotionSection>,
    );
    expect(screen.getByRole('region', { name: 'Example' })).toBeInTheDocument();
  });
});
