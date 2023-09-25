import React from 'react';
import { render } from '@test-utils/component-testing';
import { StepIcon } from './StepIcon';

test('renders the StepIcon', () => {
  const { container } = render(<StepIcon icon="1" />);
  expect(container).toMatchSnapshot();
});
