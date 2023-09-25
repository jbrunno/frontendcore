import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Timeline from '../../Timeline/Timeline';
import TimelineItem from '../../TimelineItem/TimelineItem';
import TimelineSeparator from '../../TimelineSeparator/TimelineSeparator';
import TimelineDot from '../../TimelineDot/TimelineDot';
import TimelineConnector from '../../TimelineConnector/TimelineConnector';
import TimelineOppositeContent from '../TimelineOppositeContent';
import TimelineContent from '../../TimelineContent/TimelineContent';

export default {
  id: 'timelineOppositeContent',
  title: 'Component API/TimelineOppositeContent',
  component: TimelineOppositeContent,
} as ComponentMeta<typeof TimelineOppositeContent>;

const Template: ComponentStory<typeof TimelineOppositeContent> = (args) => (
  <Timeline position="left">
    <TimelineItem>
      <TimelineOppositeContent {...args} />
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Test</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent {...args} />
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Test</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent {...args} />
      <TimelineSeparator>
        <TimelineDot />
      </TimelineSeparator>
      <TimelineContent>Test</TimelineContent>
    </TimelineItem>
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  children: 'Opposite',
};
