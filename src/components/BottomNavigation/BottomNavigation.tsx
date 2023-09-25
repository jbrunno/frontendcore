import React from 'react';
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationProps as MuiBottomNavigationProps,
} from '@mui/material';

export type BottomNavigationProps = MuiBottomNavigationProps;

export function BottomNavigation(props: BottomNavigationProps) {
  return <MuiBottomNavigation {...props} />;
}
export default BottomNavigation;
