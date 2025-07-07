import { render } from '@testing-library/react';
import PhoneIcon from '../components/PhoneIcon';

test('renders phone icon svg', () => {
  const { container } = render(<PhoneIcon />);
  expect(container.querySelector('svg')).toBeInTheDocument();
});
