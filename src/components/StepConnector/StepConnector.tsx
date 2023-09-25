import React from 'react';
import {
  StepConnector as MuiStepConnector,
  StepConnectorProps as MuiStepConnectorProps,
  stepConnectorClasses as MuiStepConnectorClasses,
} from '@mui/material';

export const stepConnectorClasses = MuiStepConnectorClasses;
export type StepConnectorProps = MuiStepConnectorProps;

export function StepConnector(props: StepConnectorProps) {
  return <MuiStepConnector {...props} />;
}

export default StepConnector;
