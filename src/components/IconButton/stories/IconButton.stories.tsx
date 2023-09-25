import DeleteIcon from '@mui/icons-material/Delete';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from '../IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (props) => (
  <IconButton {...props}>
    <DeleteIcon fontSize="inherit" />
  </IconButton>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Color = Template.bind({});
Color.args = {
  color: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
