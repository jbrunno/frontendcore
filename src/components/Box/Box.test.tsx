import React from 'react';
import { render } from '@test-utils/component-testing';
import { Box } from './Box';

test('renders the Box', () => {
  const { container } = render(<Box />);
  expect(container).toMatchSnapshot();
});
