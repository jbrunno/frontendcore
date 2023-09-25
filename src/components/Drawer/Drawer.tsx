import React from 'react';
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from '@mui/material';

export type DrawerProps = MuiDrawerProps;

export function Drawer(props: DrawerProps) {
  return <MuiDrawer {...props} />;
}

export default Drawer;
