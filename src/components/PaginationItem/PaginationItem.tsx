import React from 'react';
import {
  PaginationItem as MuiPaginationItem,
  PaginationItemProps as MuiPaginationItemProps,
} from '@mui/material';

export type PaginationItemProps = MuiPaginationItemProps;

export function PaginationItem(props: PaginationItemProps) {
  return <MuiPaginationItem {...props} />;
}
export default PaginationItem;
