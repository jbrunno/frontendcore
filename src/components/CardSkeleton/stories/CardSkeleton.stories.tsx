import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardSkeleton } from '../CardSkeleton';

export default {
  title: '@crm/CardSkeleton',
  component: CardSkeleton,
} as ComponentMeta<typeof CardSkeleton>;

export const Default: ComponentStory<typeof CardSkeleton> = (props) => (
  <CardSkeleton {...props} />
);
