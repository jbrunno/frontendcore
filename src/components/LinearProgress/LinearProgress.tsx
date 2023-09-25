import React from 'react';
import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material';

export type LinearProgressProps = MuiLinearProgressProps;

export function LinearProgress(props: LinearProgressProps) {
  return <MuiLinearProgress {...props} />;
}

export default LinearProgress;
