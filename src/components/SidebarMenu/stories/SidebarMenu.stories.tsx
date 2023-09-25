import type { ComponentMeta } from '@storybook/react';
import {
  Dashboard as DashboardIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { SidebarMenu, SidebarMenuProps } from '../SidebarMenu';

export default {
  id: 'SidebarMenu',
  title: 'Component API/Sidebar Menu',
  component: SidebarMenu,
} as ComponentMeta<typeof SidebarMenu>;

const items = [
  {
    icon: <DashboardIcon />,
    handle: () => null,
    label: 'Dashboard',
    match: true,
  },
  {
    icon: <SearchIcon />,
    handle: () => null,
    label: 'Search',
    match: false,
  },
];

export const Default = (props: SidebarMenuProps) => (
  <SidebarMenu {...props} items={items} />
);
