import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../../Avatar/Avatar';

import AvatarGroup from '../AvatarGroup';

export default {
  title: 'Component API/AvatarGroup',
  component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

export const Default: ComponentStory<typeof AvatarGroup> = (props) => (
  <AvatarGroup {...props}>
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/6.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
  </AvatarGroup>
);

Default.args = {
  max: 4,
};
