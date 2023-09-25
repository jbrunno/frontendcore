import React from 'react';
import { render } from '@test-utils/component-testing';
import { Stack } from './Stack';

test('renders the Stack', () => {
  const { container } = render(<Stack />);
  expect(container).toMatchSnapshot();
});
