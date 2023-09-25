import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormatAlignLeft as FormatAlignLeftIcon } from '@mui/icons-material';
import { ToggleButton } from '../ToggleButton';

export default {
  id: 'toggleButton',
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

export const Default: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args}>
    <FormatAlignLeftIcon />
  </ToggleButton>
);
