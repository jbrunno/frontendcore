import React from 'react';
import { render } from '@test-utils/component-testing';
import { StepButton } from './StepButton';

test('renders the StepButton', () => {
  const { container } = render(<StepButton />);
  expect(container).toMatchSnapshot();
});
