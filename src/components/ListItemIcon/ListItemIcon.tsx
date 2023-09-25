import React from 'react';
import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
} from '@mui/material';

export type ListItemIconProps = MuiListItemIconProps;

export function ListItemIcon(props: ListItemIconProps) {
  return <MuiListItemIcon {...props} />;
}
export default ListItemIcon;
