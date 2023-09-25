import React from 'react';
import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';

export function ToggleButtonGroup(props: MuiToggleButtonGroupProps) {
  return <MuiToggleButtonGroup {...props} />;
}

export default ToggleButtonGroup;
