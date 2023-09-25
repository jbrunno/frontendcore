import React from 'react';
import { render } from '@test-utils/component-testing';
import { TableHead } from './TableHead';

test('renders the TableHead', () => {
  const { container } = render(<TableHead />);
  expect(container).toMatchSnapshot();
});
