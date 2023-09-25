import React from 'react';
import { render } from '@test-utils/component-testing';
import { StepConnector } from './StepConnector';

test('renders the StepConnector', () => {
  const { container } = render(<StepConnector />);
  expect(container).toMatchSnapshot();
});
