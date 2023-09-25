import React from 'react';
import { render } from '@test-utils/component-testing';
import { Stepper } from './Stepper';

test('renders the Stepper', () => {
  const { container } = render(<Stepper />);
  expect(container).toMatchSnapshot();
});
