import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Timeline from '../../Timeline/Timeline';
import TimelineConnector from '../TimelineConnector';
import TimelineItem from '../../TimelineItem/TimelineItem';
import TimelineSeparator from '../../TimelineSeparator/TimelineSeparator';

export default {
  id: 'timelineConnector',
  title: 'Component API/TimelineConnector',
  component: TimelineConnector,
} as ComponentMeta<typeof TimelineConnector>;

const Template: ComponentStory<typeof TimelineConnector> = (args) => (
  <Timeline position="left">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector {...args} />
      </TimelineSeparator>
    </TimelineItem>
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};
