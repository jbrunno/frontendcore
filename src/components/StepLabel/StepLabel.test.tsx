import React from 'react';
import { render } from '@test-utils/component-testing';
import { StepLabel } from './StepLabel';

test('renders the StepLabel', () => {
  const { container } = render(<StepLabel />);
  expect(container).toMatchSnapshot();
});
