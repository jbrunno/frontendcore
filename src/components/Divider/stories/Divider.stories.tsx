import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from '../Divider';

export default {
  id: 'divider',
  title: 'Data Display/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = (props) => {
  return <Divider {...props} />;
};
