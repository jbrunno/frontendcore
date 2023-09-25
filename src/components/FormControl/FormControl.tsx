import React from 'react';
import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

export type FormControlProps = MuiFormControlProps;

export function FormControl(props: FormControlProps) {
  return <MuiFormControl {...props} />;
}

export default FormControl;
