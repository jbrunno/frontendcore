import React from 'react';
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';

export type TooltipProps = MuiTooltipProps;

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <MuiTooltip {...props}>
      <div>{children}</div>
    </MuiTooltip>
  );
}

export default Tooltip;
