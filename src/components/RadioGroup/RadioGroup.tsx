import React from 'react';
import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';

export type RadioGroupProps = MuiRadioGroupProps;

export function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup {...props} />;
}

export default RadioGroup;
