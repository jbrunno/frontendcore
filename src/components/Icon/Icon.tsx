import React from 'react';
import { Icon as MuiIcon, IconProps as MuiIconProps } from '@mui/material';

export function Icon({ children, ...props }: MuiIconProps) {
  return <MuiIcon {...props}>{children}</MuiIcon>;
}

export default Icon;
