import React from 'react';
import {
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps,
} from '@mui/material';

export type TableRowProps = MuiTableRowProps;

export function TableRow(props: TableRowProps) {
  return <MuiTableRow {...props} />;
}
export default TableRow;
