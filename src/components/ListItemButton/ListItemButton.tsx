import React from 'react';
import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

export type ListItemButtonProps = MuiListItemButtonProps;

export function ListItemButton(props: ListItemButtonProps) {
  return <MuiListItemButton {...props} />;
}
export default ListItemButton;
