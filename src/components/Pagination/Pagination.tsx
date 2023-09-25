import React from 'react';
import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material';

export type PaginationProps = MuiPaginationProps;

export function Pagination(props: PaginationProps) {
  return <MuiPagination {...props} />;
}
export default Pagination;
