import type { ComponentMeta } from '@storybook/react';
import { Dashboard as DashboardIcon } from '@mui/icons-material';
import { SidebarMenuItem, SidebarMenuItemProps } from '../SidebarMenuItem';

export default {
  id: 'SidebarMenuItem',
  title: 'Component API/Sidebar Menu Item',
  component: SidebarMenuItem,
} as ComponentMeta<typeof SidebarMenuItem>;

const item = {
  icon: <DashboardIcon />,
  handle: () => null,
  label: 'Dashboard',
  match: false,
};

export const Default = (props: SidebarMenuItemProps) => (
  <SidebarMenuItem {...props} item={item} />
);
