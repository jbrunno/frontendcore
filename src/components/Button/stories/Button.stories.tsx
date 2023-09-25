import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props: ButtonProps) => (
  <Button {...props}>{props.children}</Button>
);

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Text',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  children: 'Contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'contained',
  children: 'Small',
};
