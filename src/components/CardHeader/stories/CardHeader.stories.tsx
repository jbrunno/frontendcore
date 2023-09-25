import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../../Avatar/Avatar';
import Card from '../../Card/Card';
import IconButton from '../../IconButton/IconButton';

import { CardHeader } from '../CardHeader';

export default {
  id: 'cardHeader',
  title: 'Component API/CardHeader',
  component: CardHeader,
} as ComponentMeta<typeof CardHeader>;

export const Default: ComponentStory<typeof CardHeader> = (props) => (
  <Card>
    <CardHeader
      avatar={<Avatar>R</Avatar>}
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="CardHeader"
      subheader="September 14, 2016"
      {...props}
    />
  </Card>
);
