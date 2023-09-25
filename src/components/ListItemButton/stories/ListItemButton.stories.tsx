import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inbox, Drafts } from '@mui/icons-material';
import { List } from '../../List/List';
import { ListItemButton, ListItemButtonProps } from '../ListItemButton';
import { ListItem } from '../../ListItem/ListItem';
import { ListItemIcon } from '../../ListItemIcon/ListItemIcon';
import { ListItemText } from '../../ListItemText/ListItemText';

export default {
  id: 'ListItemButton',
  title: 'Component API/ListItemButton',
  component: ListItemButton,
} as ComponentMeta<typeof ListItemButton>;

export const Default: ComponentStory<typeof ListItemButton> = (
  props: ListItemButtonProps,
) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton {...props}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText {...props} primary="This is a List Item Button" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton {...props}>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText {...props} primary="This is another List Item Button" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
