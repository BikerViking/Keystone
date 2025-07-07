import { render } from '@testing-library/react';
import CheckIcon from '../components/CheckIcon';

test('renders check icon svg', () => {
  const { container } = render(<CheckIcon />);
  expect(container.querySelector('svg')).toBeInTheDocument();
});
