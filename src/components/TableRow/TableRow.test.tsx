import React from 'react';
import { render } from '@test-utils/component-testing';
import { TableRow } from './TableRow';

test('renders the TableRow', () => {
  const { container } = render(<TableRow />);
  expect(container).toMatchSnapshot();
});
