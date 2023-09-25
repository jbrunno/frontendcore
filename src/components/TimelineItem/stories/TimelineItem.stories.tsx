import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimelineItem } from '../TimelineItem';
import Timeline from '../../Timeline/Timeline';

export default {
  id: 'timelineItem',
  title: 'Component API/TimelineItem',
  component: TimelineItem,
} as ComponentMeta<typeof TimelineItem>;

const Template: ComponentStory<typeof TimelineItem> = (args) => (
  <Timeline position="alternate">
    <TimelineItem {...args} />
    <TimelineItem {...args} />
    <TimelineItem {...args} />
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  children: 'Default',
};

export const Left = Template.bind({});
Left.args = {
  title: 'Left',
  children: 'Left',
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  title: 'Right',
  children: 'Right',
  position: 'right',
};
