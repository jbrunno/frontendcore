import React from 'react';
import { render } from '@test-utils/component-testing';
import { TimelineConnector } from './TimelineConnector';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineSeparator from '../TimelineSeparator/TimelineSeparator';

test('renders the TimelineConnector', () => {
  const { container } = render(
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>,
  );
  expect(container).toMatchSnapshot();
});
