import React from 'react';
import {
  InputBase as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from '@mui/material';

export type InputBaseProps = MuiInputBaseProps;

export function InputBase(props: InputBaseProps) {
  return <MuiInputBase {...props} />;
}

export default InputBase;
