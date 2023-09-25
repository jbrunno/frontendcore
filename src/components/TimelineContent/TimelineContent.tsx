import React from 'react';
import {
  TimelineContent as MuiTimelineContent,
  TimelineContentProps as MuiTimelineContentProps,
} from '@mui/lab';

export type TimelineContentProps = MuiTimelineContentProps;

export function TimelineContent(props: TimelineContentProps) {
  return <MuiTimelineContent {...props} />;
}

export default TimelineContent;
