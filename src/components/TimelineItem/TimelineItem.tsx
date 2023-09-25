import React from 'react';
import {
  TimelineItem as MuiTimelineItem,
  TimelineItemProps as MuiTimelineItemProps,
} from '@mui/lab';

export type TimelineItemProps = MuiTimelineItemProps;

export function TimelineItem(props: TimelineItemProps) {
  return <MuiTimelineItem {...props} />;
}

export default TimelineItem;
