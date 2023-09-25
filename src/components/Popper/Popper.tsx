import React from 'react';
import {
  Popper as MuiPopper,
  PopperProps as MuiPopperProps,
} from '@mui/material';

export type PopperProps = MuiPopperProps;

export function Popper(props: PopperProps) {
  return <MuiPopper {...props} />;
}

export default Popper;
