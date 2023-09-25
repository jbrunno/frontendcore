import React from 'react';
import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material';

export type FormHelperTextProps = MuiFormHelperTextProps;

export function FormHelperText(props: FormHelperTextProps) {
  return <MuiFormHelperText {...props} />;
}

export default FormHelperText;
