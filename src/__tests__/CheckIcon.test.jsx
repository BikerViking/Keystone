import { render } from '@testing-library/react';
import CheckIcon from '../components/CheckIcon';

describe('CheckIcon component', () => {
  test('renders svg icon', () => {
    const { container } = render(<CheckIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CheckIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
