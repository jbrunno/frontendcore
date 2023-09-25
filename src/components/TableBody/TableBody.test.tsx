import React from 'react';
import { render } from '@test-utils/component-testing';
import { TableBody } from './TableBody';

test('renders the TableBody', () => {
  const { container } = render(<TableBody />);
  expect(container).toMatchSnapshot();
});
