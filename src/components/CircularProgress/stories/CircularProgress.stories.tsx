import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircularProgress, CircularProgressProps } from '../CircularProgress';

export default {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (props) => (
  <CircularProgress {...props} />
);

const defaultArgs: CircularProgressProps = {
  size: 40,
  thickness: 3.6,
  value: 0,
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
