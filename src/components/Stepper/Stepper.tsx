import React from 'react';
import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
} from '@mui/material';

export type StepperProps = MuiStepperProps;

export function Stepper(props: StepperProps) {
  return <MuiStepper {...props} />;
}

export default Stepper;
