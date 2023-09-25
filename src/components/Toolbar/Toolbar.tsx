import React from 'react';
import {
  Toolbar as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
} from '@mui/material';

export type ToolbarProps = MuiToolbarProps;

export function Toolbar(props: ToolbarProps) {
  return <MuiToolbar {...props} />;
}

export default Toolbar;
