import React from 'react';
import { Input as MuiInput, InputProps as MuiInputProps } from '@mui/material';

export type InputProps = MuiInputProps;

export function Input(props: InputProps) {
  return <MuiInput {...props} />;
}

export default Input;
