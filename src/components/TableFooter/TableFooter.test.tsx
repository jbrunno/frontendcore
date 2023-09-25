import React from 'react';
import { render } from '@test-utils/component-testing';
import { TableFooter } from './TableFooter';

test('renders the TableFooter', () => {
  const { container } = render(<TableFooter />);
  expect(container).toMatchSnapshot();
});
