import type { ComponentMeta } from '@storybook/react';
import { TopBar } from '../TopBar';

export default {
  id: 'topBar',
  title: '@crm/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

export const Default = () => <TopBar />;
