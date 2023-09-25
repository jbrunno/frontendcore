import React from 'react';
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@mui/material';

export type ListItemProps = MuiListItemProps;

export function ListItem(props: ListItemProps) {
  return <MuiListItem {...props} />;
}
export default ListItem;
