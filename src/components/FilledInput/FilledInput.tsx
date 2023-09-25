import React from 'react';
import {
  FilledInput as MuiFilledInput,
  FilledInputProps as MuiFilledInputProps,
} from '@mui/material';

export type FilledInputProps = MuiFilledInputProps;

export function FilledInput(props: FilledInputProps) {
  return <MuiFilledInput {...props} />;
}

export default FilledInput;
