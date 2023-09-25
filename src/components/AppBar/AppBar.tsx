import React from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@mui/material';

export type AppBarProps = MuiAppBarProps;

export function AppBar({ ...props }: AppBarProps) {
  return <MuiAppBar {...props} />;
}

export default AppBar;
