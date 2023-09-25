import React from 'react';
import {
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionProps as MuiBottomNavigationActionProps,
} from '@mui/material';

export type BottomNavigationActionProps = MuiBottomNavigationActionProps;

export function BottomNavigationAction(props: BottomNavigationActionProps) {
  return <MuiBottomNavigationAction {...props} />;
}
export default BottomNavigationAction;
