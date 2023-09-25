import React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

export type CheckboxProps = MuiCheckboxProps;

export function Checkbox({ ...props }: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}

export default Checkbox;
