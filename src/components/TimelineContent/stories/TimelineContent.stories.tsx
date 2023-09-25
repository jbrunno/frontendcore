import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Timeline from '../../Timeline/Timeline';
import TimelineItem from '../../TimelineItem/TimelineItem';
import TimelineContent from '../TimelineContent';
import TimelineSeparator from '../../TimelineSeparator/TimelineSeparator';
import TimelineDot from '../../TimelineDot/TimelineDot';
import TimelineConnector from '../../TimelineConnector/TimelineConnector';

export default {
  id: 'timelineContent',
  title: 'Component API/TimelineContent',
  component: TimelineContent,
} as ComponentMeta<typeof TimelineContent>;

const Template: ComponentStory<typeof TimelineContent> = (args) => (
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent {...args} />
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
      </TimelineSeparator>
      <TimelineContent {...args} />
    </TimelineItem>
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  children: 'Test',
};
