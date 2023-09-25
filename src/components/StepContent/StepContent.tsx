import React from 'react';
import {
  StepContent as MuiStepContent,
  StepContentProps as MuiStepContentProps,
} from '@mui/material';

export type StepContentProps = MuiStepContentProps;

export function StepContent(props: StepContentProps) {
  return <MuiStepContent {...props} />;
}

export default StepContent;
