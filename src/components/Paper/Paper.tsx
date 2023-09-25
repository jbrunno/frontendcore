import React from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

export type PaperProps = MuiPaperProps;

export function Paper(props: PaperProps) {
  return <MuiPaper {...props} />;
}

export default Paper;
