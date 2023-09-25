import type { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from '../../MenuItem/MenuItem';
import { Select } from '../Select';

export default {
  id: 'select',
  title: 'Inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <MenuItem value="1">Option 1</MenuItem>
    <MenuItem value="2">Option 2</MenuItem>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  value: '1',
};
