import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Backdrop } from '../Backdrop';

export default {
  title: 'Feedback/Backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (props) => (
  <Backdrop {...props} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  open: true,
  children: 'Teste',
};
