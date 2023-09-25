import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from '../../List/List';
import { ListItemText, ListItemTextProps } from '../ListItemText';
import { ListItem } from '../../ListItem/ListItem';

export default {
  id: 'ListItemText',
  title: 'Component API/ListItemText',
  component: ListItemText,
} as ComponentMeta<typeof ListItemText>;

export const Default: ComponentStory<typeof ListItemText> = (
  props: ListItemTextProps,
) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemText primary="List Item Text" {...props} />
      </ListItem>
    </List>
  );
};
