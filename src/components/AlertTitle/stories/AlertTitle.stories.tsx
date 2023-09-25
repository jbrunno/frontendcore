import type { ComponentStory, ComponentMeta } from '@storybook/react';
import AlertTitle from '../AlertTitle';

export default {
  id: 'alertTitle',
  title: 'Component API/AlertTitle',
  component: AlertTitle,
} as ComponentMeta<typeof AlertTitle>;

export const Default: ComponentStory<typeof AlertTitle> = (props) => (
  <AlertTitle {...props} />
);

Default.args = {
  title: 'Default',
  children: 'AlertTitle default!',
};
