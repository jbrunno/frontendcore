import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MailIcon from '@mui/icons-material/Mail';
import { Badge } from '../Badge';

export default {
  id: 'badge',
  title: 'Data Display/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export function Default(props: ComponentStory<typeof Badge>) {
  return (
    <Badge badgeContent={4} color="primary" {...props}>
      <MailIcon color="action" />
    </Badge>
  );
}
