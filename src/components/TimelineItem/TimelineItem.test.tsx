import React from 'react';
import { render } from '@test-utils/component-testing';
import { TimelineItem } from './TimelineItem';
import Timeline from '../Timeline/Timeline';

test('renders the TimelineItem', () => {
  const { container } = render(
    <Timeline>
      <TimelineItem>Test</TimelineItem>
    </Timeline>,
  );
  expect(container).toMatchSnapshot();
});
