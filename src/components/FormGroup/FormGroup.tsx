import React from 'react';
import {
  FormGroup as MuiFormGroup,
  FormGroupProps as MuiFormGroupProps,
} from '@mui/material';

export type FormGroupProps = MuiFormGroupProps;

export function FormGroup(props: FormGroupProps) {
  return <MuiFormGroup {...props} />;
}

export default FormGroup;
