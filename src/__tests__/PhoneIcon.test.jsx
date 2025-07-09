import { render } from '@testing-library/react';
import PhoneIcon from '../components/PhoneIcon';

describe('PhoneIcon component', () => {
  test('renders phone icon svg', () => {
    const { container } = render(<PhoneIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<PhoneIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
