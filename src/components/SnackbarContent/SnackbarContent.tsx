import React from 'react';
import {
  SnackbarContent as MuiSnackbarContent,
  SnackbarContentProps as MuiSnackbarContentProps,
} from '@mui/material';

export type SnackbarContentProps = MuiSnackbarContentProps;

export function SnackbarContent(props: SnackbarContentProps) {
  return <MuiSnackbarContent {...props} />;
}

export default SnackbarContent;
