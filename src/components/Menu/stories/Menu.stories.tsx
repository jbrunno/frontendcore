import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Menu from '../Menu';
import MenuItem from '../../MenuItem/MenuItem';

export default {
  id: 'menu',
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    open: { control: 'boolean' },
  },
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
  </Menu>
);
