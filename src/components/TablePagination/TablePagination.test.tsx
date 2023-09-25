import React, { MouseEvent } from 'react';
import { render } from '@test-utils/component-testing';
import { TablePagination } from './TablePagination';

test('renders the TablePagination', () => {
  const handlePageChange = (
    evt: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => newPage;

  const { container } = render(
    <TablePagination
      count={5}
      page={0}
      rowsPerPage={10}
      onPageChange={() => handlePageChange(null, 4)}
    />,
  );
  expect(container).toMatchSnapshot();
});
