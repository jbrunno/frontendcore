import React from 'react';
import {
  TableBody as MuiTableBody,
  TableBodyProps as MuiTableBodyProps,
} from '@mui/material';

export type TableBodyProps = MuiTableBodyProps;

export function TableBody(props: TableBodyProps) {
  return <MuiTableBody {...props} />;
}
export default TableBody;
