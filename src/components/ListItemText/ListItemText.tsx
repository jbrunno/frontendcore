import React from 'react';
import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material';

export type ListItemTextProps = MuiListItemTextProps;

export function ListItemText(props: ListItemTextProps) {
  return <MuiListItemText {...props} />;
}
export default ListItemText;
