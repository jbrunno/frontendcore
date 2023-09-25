import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inbox } from '@mui/icons-material';
import { List } from '../../List/List';
import { ListItemIcon, ListItemIconProps } from '../ListItemIcon';
import { ListItem } from '../../ListItem/ListItem';

export default {
  id: 'ListItemIcon',
  title: 'Component API/ListItemIcon',
  component: ListItemIcon,
} as ComponentMeta<typeof ListItemIcon>;

export const Default: ComponentStory<typeof ListItemIcon> = (
  props: ListItemIconProps,
) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon {...props}>
          <Inbox />
        </ListItemIcon>
      </ListItem>
    </List>
  );
};
