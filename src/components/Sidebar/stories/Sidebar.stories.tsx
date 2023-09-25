import type { ComponentMeta } from '@storybook/react';
import {
  Dashboard as DashboardIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarMenu } from '../../SidebarMenu/SidebarMenu';
import { SidebarUser } from '../../SidebarUser/SidebarUser';

export default {
  id: 'Sidebar',
  title: '@crm/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Default = () => {
  const [match, setMatch] = useState('Dashboard');
  const handleMatch = (label: string) => setMatch(label);

  const items = [
    {
      icon: <DashboardIcon />,
      handle: () => {
        handleMatch('Dashboard');
      },
      label: 'Dashboard',
      match: match === 'Dashboard',
    },
    {
      icon: <SearchIcon />,
      handle: () => {
        handleMatch('Search');
      },
      label: 'Search',
      match: match === 'Search',
    },
  ];

  return (
    <Sidebar>
      {({ isExpanded }) => (
        <>
          <SidebarMenu isExpanded={isExpanded} items={items} />
          <SidebarUser
            isExpanded={isExpanded}
            handleLogOut={() => null}
            user={{ name: 'Adriano Oliveira' }}
          />
        </>
      )}
    </Sidebar>
  );
};
