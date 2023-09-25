import React from 'react';
import {
  TimelineOppositeContent as MuiTimelineOppositeContent,
  TimelineOppositeContentProps as MuiTimelineOppositeContentProps,
} from '@mui/lab';

export type TimelineOppositeContentProps = MuiTimelineOppositeContentProps;

export function TimelineOppositeContent(props: TimelineOppositeContentProps) {
  return <MuiTimelineOppositeContent {...props} />;
}

export default TimelineOppositeContent;
