import React from 'react';
import { render } from '@test-utils/component-testing';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineSeparator from '../TimelineSeparator/TimelineSeparator';
import TimelineDot from '../TimelineDot/TimelineDot';
import TimelineConnector from '../TimelineConnector/TimelineConnector';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineOppositeContent from './TimelineOppositeContent';

test('renders the TimelineConnector', () => {
  const { container } = render(
    <Timeline position="left">
      <TimelineItem>
        <TimelineOppositeContent>Opposite</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Test</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>Opposite</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Test</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>Opposite</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Test</TimelineContent>
      </TimelineItem>
    </Timeline>,
  );
  expect(container).toMatchSnapshot();
});
