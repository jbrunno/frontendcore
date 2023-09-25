import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from '../Avatar';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (props) => (
  <Avatar {...props} />
);

export const src = Default.bind({});
src.args = {
  src: 'https://mui.com/static/images/avatar/1.jpg',
};
