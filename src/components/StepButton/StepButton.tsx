import React from 'react';
import {
  StepButton as MuiStepButton,
  StepButtonProps as MuiStepButtonProps,
} from '@mui/material';

export type StepButtonProps = MuiStepButtonProps;

export function StepButton(props: StepButtonProps) {
  return <MuiStepButton {...props} />;
}

export default StepButton;
