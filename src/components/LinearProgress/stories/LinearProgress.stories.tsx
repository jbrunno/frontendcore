import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinearProgress, LinearProgressProps } from '../LinearProgress';

export default {
  title: 'Feedback/LinearProgress',
  component: LinearProgress,
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (props) => (
  <LinearProgress {...props} />
);

const defaultArgs: LinearProgressProps = {
  value: 0,
  valueBuffer: 0,
  variant: 'indeterminate',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  title: 'Default',
};

export const Inherit = Template.bind({});
Inherit.args = {
  ...defaultArgs,
  title: 'Inherit',
  color: 'inherit',
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  title: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  title: 'Secondary',
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  ...defaultArgs,
  title: 'Error',
  color: 'error',
};

export const Info = Template.bind({});
Info.args = {
  ...defaultArgs,
  title: 'Info',
  color: 'info',
};

export const Success = Template.bind({});
Success.args = {
  ...defaultArgs,
  title: 'Success',
  color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  ...defaultArgs,
  title: 'Warning',
  color: 'warning',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...defaultArgs,
  title: 'Indeterminate',
  value: 0,
  variant: 'indeterminate',
};

export const Determinate = Template.bind({});
Determinate.args = {
  ...defaultArgs,
  title: 'Determinate',
  value: 50,
  variant: 'determinate',
};

export const Buffer = Template.bind({});
Buffer.args = {
  ...defaultArgs,
  title: 'Buffer',
  value: 50,
  valueBuffer: 70,
  variant: 'buffer',
};

export const Query = Template.bind({});
Query.args = {
  ...defaultArgs,
  title: 'Query',
  variant: 'query',
};
