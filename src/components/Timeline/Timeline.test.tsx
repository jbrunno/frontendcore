import React from 'react';
import { render } from '@test-utils/component-testing';
import { Timeline } from './Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineSeparator from '../TimelineSeparator/TimelineSeparator';
import TimelineConnector from '../TimelineConnector/TimelineConnector';
import TimelineDot from '../TimelineDot/TimelineDot';
import TimelineContent from '../TimelineContent/TimelineContent';

test('renders the Timeline', () => {
  const { container } = render(
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>,
  );
  expect(container).toMatchSnapshot();
});
