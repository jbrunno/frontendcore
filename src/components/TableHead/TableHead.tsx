import React from 'react';
import {
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps,
} from '@mui/material';

export type TableHeadProps = MuiTableHeadProps;

export function TableHead(props: TableHeadProps) {
  return <MuiTableHead {...props} />;
}
export default TableHead;
