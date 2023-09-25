import React from 'react';
import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';

export type FormControlLabelProps = MuiFormControlLabelProps;

export function FormControlLabel({ ...props }: FormControlLabelProps) {
  return <MuiFormControlLabel {...props} />;
}

export default FormControlLabel;
