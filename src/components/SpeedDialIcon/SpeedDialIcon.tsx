import React from 'react';
import {
  SpeedDialIcon as MuiSpeedDialIcon,
  SpeedDialIconProps as MuiSpeedDialIconProps,
} from '@mui/material';

export type SpeedDialIconProps = MuiSpeedDialIconProps;

export function SpeedDialIcon(props: SpeedDialIconProps) {
  return <MuiSpeedDialIcon {...props} />;
}

export default SpeedDialIcon;
