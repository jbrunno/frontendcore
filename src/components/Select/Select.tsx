import React from 'react';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';

export type SelectProps = MuiSelectProps;

export function Select(props: SelectProps) {
  return <MuiSelect {...props} />;
}

export default Select;
