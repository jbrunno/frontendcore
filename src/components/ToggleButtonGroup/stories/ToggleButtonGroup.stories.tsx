import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
} from '@mui/icons-material';
import { ToggleButtonGroup } from '../ToggleButtonGroup';
import ToggleButton from '../../ToggleButton/ToggleButton';

export default {
  id: 'toggleButtonGroup',
  title: 'Component API/ToggleButtonGroup',
  component: ToggleButtonGroup,
  subcomponents: { ToggleButton },
  argTypes: {
    exclusive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: {
      control: 'radio',
      options: [
        'standard',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
    },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
  },
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton value="left" aria-label="left aligned">
      <FormatAlignLeftIcon />
    </ToggleButton>
    <ToggleButton value="center" aria-label="centered">
      <FormatAlignCenterIcon />
    </ToggleButton>
    <ToggleButton value="right" aria-label="right aligned">
      <FormatAlignRightIcon />
    </ToggleButton>
    <ToggleButton value="justify" aria-label="justified" disabled>
      <FormatAlignJustifyIcon />
    </ToggleButton>
  </ToggleButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  value: 'left',
  defaultValue: 'left',
};
