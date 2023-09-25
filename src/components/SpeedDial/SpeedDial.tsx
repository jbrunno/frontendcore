import React from 'react';
import {
  SpeedDial as MuiSpeedDial,
  SpeedDialProps as MuiSpeedDialProps,
} from '@mui/material';

export type SpeedDialProps = MuiSpeedDialProps;

export function SpeedDial(props: SpeedDialProps) {
  return <MuiSpeedDial {...props} />;
}

export default SpeedDial;
