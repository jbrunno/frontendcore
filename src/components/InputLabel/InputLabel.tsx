import React from 'react';
import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material';

export type InputLabelProps = MuiInputLabelProps;

export function InputLabel(props: InputLabelProps) {
  return <MuiInputLabel {...props} />;
}

export default InputLabel;
