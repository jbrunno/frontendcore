import React from 'react';
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from '@mui/material';

export type SnackbarProps = MuiSnackbarProps;

export function Snackbar(props: SnackbarProps) {
  return <MuiSnackbar {...props} />;
}

export default Snackbar;
