import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonLoading, ButtonLoadingProps } from '../ButtonLoading';

export default {
  title: 'Components/ButtonLoading',
  component: ButtonLoading,
} as ComponentMeta<typeof ButtonLoading>;

const Template: ComponentStory<typeof ButtonLoading> = (
  props: ButtonLoadingProps,
) => <ButtonLoading {...props}>{props.children}</ButtonLoading>;

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
