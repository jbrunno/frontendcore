import React from 'react';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

export type CircularProgressProps = MuiCircularProgressProps;

export function CircularProgress(props: CircularProgressProps) {
  return <MuiCircularProgress {...props} />;
}

export default CircularProgress;
