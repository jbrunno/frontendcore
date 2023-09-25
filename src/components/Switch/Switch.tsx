import React from 'react';
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material';

export type SwitchProps = MuiSwitchProps;

export function Switch(props: SwitchProps) {
  return <MuiSwitch {...props} />;
}

export default Switch;
