import React from 'react';
import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from '@mui/material';

export type PopoverProps = MuiPopoverProps;

export function Popover(props: PopoverProps) {
  return <MuiPopover {...props} />;
}

export default Popover;
