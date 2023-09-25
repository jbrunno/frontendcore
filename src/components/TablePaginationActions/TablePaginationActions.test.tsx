import React, { MouseEvent } from 'react';
import { render } from '@test-utils/component-testing';
import { TablePagination } from '../TablePagination/TablePagination';
import TablePaginationActions from './TablePaginationActions';

test('renders the TablePaginationActions', () => {
  const handlePageChange = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => newPage;

  const { container } = render(
    <TablePagination
      count={5}
      page={0}
      rowsPerPage={10}
      onPageChange={() => handlePageChange(null, 4)}
      ActionsComponent={TablePaginationActions}
    />,
  );
  expect(container).toMatchSnapshot();
});
