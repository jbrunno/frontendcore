import React from 'react';
import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
} from '@mui/material';

export type ButtonGroupProps = MuiButtonGroupProps;

export function ButtonGroup({ children, ...props }: ButtonGroupProps) {
  return <MuiButtonGroup {...props}>{children}</MuiButtonGroup>;
}

export default ButtonGroup;
