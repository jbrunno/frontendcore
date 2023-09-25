import React from 'react';
import { render } from '@test-utils/component-testing';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineContent from './TimelineContent';
import TimelineSeparator from '../TimelineSeparator/TimelineSeparator';
import TimelineDot from '../TimelineDot/TimelineDot';
import TimelineConnector from '../TimelineConnector/TimelineConnector';

test('renders the TimelineConnector', () => {
  const { container } = render(
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Test</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Test</TimelineContent>
      </TimelineItem>
    </Timeline>,
  );
  expect(container).toMatchSnapshot();
});
