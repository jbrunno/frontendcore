import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableSkeleton } from '../TableSkeleton';

export default {
  title: '@crm/TableSkeleton',
  component: TableSkeleton,
  args: {
    rows: 3,
  },
} as ComponentMeta<typeof TableSkeleton>;

export const Default: ComponentStory<typeof TableSkeleton> = (args) => (
  <TableSkeleton {...args} />
);
