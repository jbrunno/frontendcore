import React from 'react';
import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@mui/material';

export type DividerProps = MuiDividerProps;

export function Divider(props: DividerProps) {
  return <MuiDivider {...props} />;
}

export default Divider;
