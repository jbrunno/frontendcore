import React from 'react';
import {
  SwipeableDrawer as MuiSwipeableDrawer,
  SwipeableDrawerProps as MuiSwipeableDrawerProps,
} from '@mui/material';

export type SwipeableDrawerProps = MuiSwipeableDrawerProps;

export function SwipeableDrawer(props: SwipeableDrawerProps) {
  return <MuiSwipeableDrawer {...props} />;
}

export default SwipeableDrawer;
