import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

export type TextFieldProps = MuiTextFieldProps & {
  errorText?: string;
  isTouched?: boolean;
};

export function TextField({
  children,
  helperText,
  error,
  errorText,
  isTouched,
  ...props
}: TextFieldProps) {
  const hasError = error || (isTouched && !!errorText);
  const message = hasError ? errorText : helperText;
  return (
    <MuiTextField error={hasError} helperText={message} {...props}>
      {children}
    </MuiTextField>
  );
}

export default TextField;
