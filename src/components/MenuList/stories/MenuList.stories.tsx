import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuList from '../MenuList';
import MenuItem from '../../MenuItem/MenuItem';

export default {
  id: 'menuList',
  title: 'Component API/MenuList',
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

export const Default: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args}>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
  </MenuList>
);
