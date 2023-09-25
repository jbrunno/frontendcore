import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '../TextField';

export default {
  id: 'textField',
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Default = (props: ComponentStory<typeof TextField>) => (
  <TextField {...props} />
);

Default.args = {
  label: 'Text Field',
  variant: 'outlined',
  helperText: 'This is a helper text',
};
