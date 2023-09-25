import React from 'react';
import {
  SpeedDialAction as MuiSpeedDialAction,
  SpeedDialActionProps as MuiSpeedDialActionProps,
} from '@mui/material';

export type SpeedDialActionProps = MuiSpeedDialActionProps;

export function SpeedDialAction(props: SpeedDialActionProps) {
  return <MuiSpeedDialAction {...props} />;
}

export default SpeedDialAction;
