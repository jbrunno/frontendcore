import React from 'react';
import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
} from '@mui/material';

export type TableCellProps = MuiTableCellProps;

export function TableCell(props: TableCellProps) {
  return <MuiTableCell {...props} />;
}
export default TableCell;
