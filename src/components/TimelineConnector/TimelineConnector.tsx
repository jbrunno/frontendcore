import React from 'react';
import {
  TimelineConnector as MuiTimelineConnector,
  TimelineConnectorProps as MuiTimelineConnectorProps,
} from '@mui/lab';

export type TimelineConnectorProps = MuiTimelineConnectorProps;

export function TimelineConnector(props: TimelineConnectorProps) {
  return <MuiTimelineConnector {...props} />;
}

export default TimelineConnector;
