import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Timeline } from '../Timeline';
import TimelineDot from '../../TimelineDot/TimelineDot';
import TimelineItem from '../../TimelineItem/TimelineItem';
import TimelineConnector from '../../TimelineConnector/TimelineConnector';
import TimelineSeparator from '../../TimelineSeparator/TimelineSeparator';
import TimelineContent from '../../TimelineContent/TimelineContent';

export default {
  id: 'timeline',
  title: 'Lab/Timeline',
  component: Timeline,
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}>
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
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};

export const Left = Template.bind({});
Left.args = {
  title: 'Left',
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  title: 'Right',
  position: 'right',
};

export const Alternate = Template.bind({});
Alternate.args = {
  title: 'Alternate',
  position: 'alternate',
};
