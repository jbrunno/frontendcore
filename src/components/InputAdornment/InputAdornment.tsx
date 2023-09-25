import React from 'react';
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
} from '@mui/material';

export type InputAdornmentProps = MuiInputAdornmentProps;

export function InputAdornment(props: InputAdornmentProps) {
  return <MuiInputAdornment {...props} />;
}

export default InputAdornment;
