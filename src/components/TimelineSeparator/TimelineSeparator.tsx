import React from 'react';
import {
  TimelineSeparator as MuiTimelineSeparator,
  TimelineSeparatorProps as MuiTimelineSeparatorProps,
} from '@mui/lab';

export type TimelineSeparatorProps = MuiTimelineSeparatorProps;

export function TimelineSeparator(props: TimelineSeparatorProps) {
  return <MuiTimelineSeparator {...props} />;
}

export default TimelineSeparator;
