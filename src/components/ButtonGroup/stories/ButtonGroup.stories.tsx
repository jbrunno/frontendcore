import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../../Button/Button';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { Button },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (props) => (
  <ButtonGroup {...props}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
);

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'contained',
};

export const Vertical = Template.bind({});
Vertical.args = {
  variant: 'contained',
  orientation: 'vertical',
};
