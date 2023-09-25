import React from 'react';
import {
  TimelineDot as MuiTimelineDot,
  TimelineDotProps as MuiTimelineDotProps,
} from '@mui/lab';

export type TimelineDotProps = MuiTimelineDotProps;

export function TimelineDot(props: TimelineDotProps) {
  return <MuiTimelineDot {...props} />;
}

export default TimelineDot;
