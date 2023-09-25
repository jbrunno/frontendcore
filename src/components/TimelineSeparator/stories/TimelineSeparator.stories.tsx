import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Timeline from '../../Timeline/Timeline';
import TimelineItem from '../../TimelineItem/TimelineItem';
import TimelineSeparator from '../TimelineSeparator';

export default {
  id: 'timelineSeparator',
  title: 'Component API/TimelineSeparator',
  component: TimelineSeparator,
} as ComponentMeta<typeof TimelineSeparator>;

const Template: ComponentStory<typeof TimelineSeparator> = (args) => (
  <Timeline position="left">
    <TimelineItem>
      <TimelineSeparator {...args} />
    </TimelineItem>
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};
