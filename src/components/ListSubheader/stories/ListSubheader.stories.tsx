import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inbox, Drafts } from '@mui/icons-material';
import { ListSubheader, ListSubheaderProps } from '../ListSubheader';
import { List } from '../../List/List';
import { ListItem } from '../../ListItem/ListItem';
import { ListItemButton } from '../../ListItemButton/ListItemButton';
import { ListItemIcon } from '../../ListItemIcon/ListItemIcon';
import { ListItemText } from '../../ListItemText/ListItemText';

export default {
  id: 'listSubheader',
  title: 'Component API/ListSubheader',
  component: ListSubheader,
} as ComponentMeta<typeof ListSubheader>;

export const Default: ComponentStory<typeof ListSubheader> = (
  props: ListSubheaderProps,
) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader id="nested-list-subheader" {...props}>
          List SubHeader
        </ListSubheader>
      }
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="This is a List Item" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="This is another List Item" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
