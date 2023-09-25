import React from 'react';
import { render } from '@test-utils/component-testing';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineSeparator from './TimelineSeparator';

test('renders the TimelineConnector', () => {
  const { container } = render(
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator />
      </TimelineItem>
    </Timeline>,
  );
  expect(container).toMatchSnapshot();
});
