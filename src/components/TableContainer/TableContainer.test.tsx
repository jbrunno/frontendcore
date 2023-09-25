import React from 'react';
import { render } from '@test-utils/component-testing';
import { TableContainer } from './TableContainer';

test('renders the TableContainer', () => {
  const { container } = render(<TableContainer />);
  expect(container).toMatchSnapshot();
});
