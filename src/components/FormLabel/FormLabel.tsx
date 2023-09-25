import React from 'react';
import {
  FormLabel as MuiFormLabel,
  FormLabelProps as MuiFormLabelProps,
} from '@mui/material';

export type FormLabelProps = MuiFormLabelProps;

export function FormLabel(props: FormLabelProps) {
  return <MuiFormLabel {...props} />;
}

export default FormLabel;
