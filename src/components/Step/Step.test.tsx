import React from 'react';
import { render } from '@test-utils/component-testing';
import { Step } from './Step';

test('renders the Step', () => {
  const { container } = render(<Step />);
  expect(container).toMatchSnapshot();
});
