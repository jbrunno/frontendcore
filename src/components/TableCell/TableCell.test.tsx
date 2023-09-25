import React from 'react';
import { render } from '@test-utils/component-testing';
import TableContainer from '../TableContainer/TableContainer';

test('renders the TableCell', () => {
  const { container } = render(<TableContainer />);
  expect(container).toMatchSnapshot();
});
