import React from 'react';
import { render } from '@test-utils/component-testing';
import { StepContent } from './StepContent';

test('renders the StepContent', () => {
  const { container } = render(<StepContent>StepContent</StepContent>);
  expect(container).toMatchSnapshot();
});
