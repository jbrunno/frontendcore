import React from 'react';
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';

export type MenuItemProps = MuiMenuItemProps;

export function MenuItem(props: MenuItemProps) {
  return <MuiMenuItem {...props} />;
}
export default MenuItem;
