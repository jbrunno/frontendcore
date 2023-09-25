import React from 'react';
import {
  StepIcon as MuiStepIcon,
  StepIconProps as MuiStepIconProps,
} from '@mui/material';

export type StepIconProps = MuiStepIconProps;

export function StepIcon(props: StepIconProps) {
  return <MuiStepIcon {...props} />;
}

export default StepIcon;
