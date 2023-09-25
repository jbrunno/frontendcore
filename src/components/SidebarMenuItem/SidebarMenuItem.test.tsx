import React from 'react';
import { render } from '@test-utils/component-testing';
import { Dashboard as DashboardIcon } from '@mui/icons-material';
import { SidebarMenuItem } from './SidebarMenuItem';

const item = {
  icon: <DashboardIcon />,
  handle: () => null,
  label: 'Dashboard',
  match: false,
};

test('renders the SidebarMenuItem', () => {
  const { container } = render(<SidebarMenuItem item={item} isExpanded />);
  expect(container).toMatchSnapshot();
});
