import React from 'react';
import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
} from '@mui/material';

export type BackdropProps = MuiBackdropProps;

export function Backdrop({ children, ...props }: BackdropProps) {
  return <MuiBackdrop {...props}>{children}</MuiBackdrop>;
}

export default Backdrop;
