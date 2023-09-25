import React from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

export type ListProps = MuiListProps;

export function List(props: ListProps) {
  return <MuiList {...props} />;
}
export default List;
