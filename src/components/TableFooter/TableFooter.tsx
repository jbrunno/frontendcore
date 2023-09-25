import React from 'react';
import {
  TableFooter as MuiTableFooter,
  TableFooterProps as MuiTableFooterProps,
} from '@mui/material';

export type TableFooterProps = MuiTableFooterProps;

export function TableFooter(props: TableFooterProps) {
  return <MuiTableFooter {...props} />;
}
export default TableFooter;
