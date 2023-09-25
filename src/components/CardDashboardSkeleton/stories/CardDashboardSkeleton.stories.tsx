import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardDashboardSkeleton } from '../CardDashboardSkeleton';

export default {
  title: '@crm/CardDashboardSkeleton',
  component: CardDashboardSkeleton,
} as ComponentMeta<typeof CardDashboardSkeleton>;

const Template: ComponentStory<typeof CardDashboardSkeleton> = (args) => (
  <CardDashboardSkeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};
