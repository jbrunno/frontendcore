import React from 'react';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material';

export type IconButtonProps = MuiIconButtonProps;

export function IconButton({ children, ...props }: IconButtonProps) {
  return <MuiIconButton {...props}>{children}</MuiIconButton>;
}

export default IconButton;
