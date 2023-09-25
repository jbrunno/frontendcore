import React from 'react';
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';

export type MenuProps = MuiMenuProps;

export function Menu(props: MenuProps) {
  return <MuiMenu {...props} />;
}
export default Menu;
