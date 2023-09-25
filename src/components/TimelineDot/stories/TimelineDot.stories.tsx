import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimelineDot } from '../TimelineDot';
import Timeline from '../../Timeline/Timeline';

export default {
  id: 'textField',
  title: 'Component API/TimelineDot',
  component: TimelineDot,
} as ComponentMeta<typeof TimelineDot>;

const Template: ComponentStory<typeof TimelineDot> = (args) => (
  <Timeline>
    <TimelineDot {...args} />
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  color: 'error',
};

export const Grey = Template.bind({});
Grey.args = {
  title: 'Grey',
  color: 'grey',
};

export const Info = Template.bind({});
Info.args = {
  title: 'Info',
  color: 'info',
};

export const inherit = Template.bind({});
inherit.args = {
  title: 'inherit',
  color: 'inherit',
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  color: 'warning',
};

export const Filled = Template.bind({});
Filled.args = {
  title: 'Filled',
  variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: 'Outlined',
  variant: 'outlined',
};
