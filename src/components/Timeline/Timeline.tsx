import React, { Ref } from 'react';
import {
  Timeline as MuiTimeline,
  TimelineProps as MuiTimelineProps,
} from '@mui/lab';

export type TimelineProps = MuiTimelineProps & {
  ref?: Ref<HTMLUListElement>;
};

export function Timeline(props: TimelineProps) {
  return <MuiTimeline {...props} />;
}

export default Timeline;
