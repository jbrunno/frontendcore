import React, { MouseEvent } from 'react';
import {
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material';
import { useTablePaginationLabel } from './hooks/useTablePaginationLabel';

interface TablePaginationActionProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
}

export type TablePaginationProps = MuiTablePaginationProps &
  TablePaginationActionProps;

export function TablePagination(props: TablePaginationProps) {
  const { page, count, rowsPerPage } = props;
  const {
    actions: { portugueseLabel },
  } = useTablePaginationLabel({
    pagination: {
      page,
      count,
      rowsPerPage,
    },
  });
  return (
    <MuiTablePagination
      labelDisplayedRows={portugueseLabel}
      SelectProps={{
        inputProps: {
          'aria-label': 'Linhas por página',
          native: 'true',
        },
      }}
      labelRowsPerPage="Linhas por página"
      {...props}
    />
  );
}
export default TablePagination;
