import React from 'react';
import {
  StepLabel as MuiStepLabel,
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material';

export type StepLabelProps = MuiStepLabelProps;

export function StepLabel(props: StepLabelProps) {
  return <MuiStepLabel {...props} />;
}

export default StepLabel;
