import React from 'react';
import {
  ButtonBase as MuiButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
} from '@mui/material';

export type ButtonBaseProps = MuiButtonBaseProps;

export function ButtonBase(props: ButtonBaseProps) {
  return <MuiButtonBase {...props} />;
}

export default ButtonBase;
