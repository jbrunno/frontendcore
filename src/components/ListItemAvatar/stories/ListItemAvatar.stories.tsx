import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inbox } from '@mui/icons-material';
import { List } from '../../List/List';
import { ListItemAvatar, ListItemAvatarProps } from '../ListItemAvatar';
import { ListItem } from '../../ListItem/ListItem';
import { Avatar } from '../../Avatar/Avatar';

export default {
  id: 'ListItemAvatar',
  title: 'Component API/ListItemAvatar',
  component: ListItemAvatar,
} as ComponentMeta<typeof ListItemAvatar>;

export const Default: ComponentStory<typeof ListItemAvatar> = (
  props: ListItemAvatarProps,
) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      <ListItem>
        <ListItemAvatar {...props}>
          <Avatar>
            <Inbox />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
  );
};
