import { render } from '@testing-library/react';
import { MotionSection } from '../components';

describe('MotionSection component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<MotionSection>Hello</MotionSection>);
    expect(asFragment()).toMatchSnapshot();
  });
});
