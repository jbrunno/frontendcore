import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuItem from '../MenuItem';

export default {
  id: 'menuItem',
  title: 'Component API/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

export const Default: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args}>Item</MenuItem>
);
