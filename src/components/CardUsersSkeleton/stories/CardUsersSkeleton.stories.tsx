import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardUsersSkeleton } from '../CardUsersSkeleton';

export default {
  title: '@crm/CardUsersSkeleton',
  component: CardUsersSkeleton,
} as ComponentMeta<typeof CardUsersSkeleton>;

const Template: ComponentStory<typeof CardUsersSkeleton> = (args) => (
  <CardUsersSkeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};
