import type { ComponentMeta } from '@storybook/react';
import { SidebarLogo } from '../SidebarLogo';

export default {
  id: 'SidebarLogo',
  title: 'Component API/Sidebar Logo',
  component: SidebarLogo,
} as ComponentMeta<typeof SidebarLogo>;

export const Default = () => <SidebarLogo />;
