import React from 'react';
import {
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps,
} from '@mui/material';

export type MenuListProps = MuiMenuListProps;

export function MenuList(props: MenuListProps) {
  return <MuiMenuList {...props} />;
}
export default MenuList;
