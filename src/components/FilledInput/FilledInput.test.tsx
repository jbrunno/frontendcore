import React from 'react';
import { render } from '@test-utils/component-testing';
import { FilledInput } from './FilledInput';

test('renders the FilledInput', () => {
  const { container } = render(<FilledInput />);
  expect(container).toMatchSnapshot();
});
