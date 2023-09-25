import React from 'react';
import { render } from '@test-utils/component-testing';
import { TimelineDot } from './TimelineDot';
import Timeline from '../Timeline/Timeline';

test('renders the TimelineDot', () => {
  const { container } = render(
    <Timeline>
      <TimelineDot />
    </Timeline>,
  );
  expect(container).toMatchSnapshot();
});
