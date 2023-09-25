import React from 'react';
import { Step as MuiStep, StepProps as MuiStepProps } from '@mui/material';

export type StepProps = MuiStepProps;

export function Step(props: StepProps) {
  return <MuiStep {...props} />;
}

export default Step;
