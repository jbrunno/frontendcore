import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Restore, Favorite } from '@mui/icons-material';
import { ListItem, ListItemProps } from '../ListItem';
import { List } from '../../List/List';
import { ListItemIcon } from '../../ListItemIcon/ListItemIcon';
import { ListItemText } from '../../ListItemText/ListItemText';

export default {
  id: 'ListItem',
  title: 'Component API/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

export const Default: ComponentStory<typeof ListItem> = (
  props: ListItemProps,
) => {
  return (
    <List>
      <ListItem disablePadding {...props}>
        <ListItemIcon>
          <Restore />
        </ListItemIcon>
        <ListItemText primary="This is a List Item" />
      </ListItem>
      <ListItem disablePadding {...props}>
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
        <ListItemText primary="This is another List Item" />
      </ListItem>
    </List>
  );
};
