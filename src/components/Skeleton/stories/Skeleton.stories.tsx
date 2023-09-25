import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../../Avatar/Avatar';
import Typography from '../../Typography/Typography';

import { Skeleton } from '../Skeleton';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (props) => (
  <Skeleton {...props} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};

export const Text = Template.bind({});
Text.args = {
  title: 'Text',
  variant: 'text',
};

export const Circular = Template.bind({});
Circular.args = {
  title: 'Circular',
  variant: 'circular',
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  title: 'Rectangular',
  variant: 'rectangular',
};

export const PulseAnimation = Template.bind({});
PulseAnimation.args = {
  title: 'PulseAnimation',
  animation: 'pulse',
};

export const WaveAnimation = Template.bind({});
WaveAnimation.args = {
  title: 'WaveAnimation',
  animation: 'wave',
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
  title: 'NoAnimation',
  animation: false,
};

const ParentDimensionsTemplate: ComponentStory<typeof Skeleton> = (props) => (
  <Typography variant="h1">
    <Skeleton {...props} />
  </Typography>
);

export const ParentDimensions = ParentDimensionsTemplate.bind({});
ParentDimensions.args = {
  title: 'ParentDimensions',
};

export const ChildrenDimensions = Template.bind({});
ChildrenDimensions.args = {
  title: 'ChildrenDimensions',
  children: <Avatar />,
};
