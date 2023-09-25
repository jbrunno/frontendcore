import React from 'react';
import { render } from '@test-utils/component-testing';
import { Pagination } from './Pagination';

test('renders the Pagination', () => {
  const { container } = render(<Pagination count={10} color="primary" />);
  expect(container).toMatchSnapshot();
});
