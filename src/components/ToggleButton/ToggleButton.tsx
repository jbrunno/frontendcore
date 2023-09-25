import React from 'react';
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material';

export function ToggleButton({ children, ...props }: MuiToggleButtonProps) {
  return <MuiToggleButton {...props}>{children}</MuiToggleButton>;
}

export default ToggleButton;
