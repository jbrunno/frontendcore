import React from 'react';
import { render } from '@test-utils/component-testing';
import { TableSkeleton } from './TableSkeleton';

test('renders the TableSkeleton', () => {
  const { container } = render(<TableSkeleton rows={3} />);
  expect(container).toMatchSnapshot();
});
