import React from 'react';
import { render } from '@test-utils/component-testing';
import { Dashboard as DashboardIcon } from '@mui/icons-material';
import { SidebarMenu } from './SidebarMenu';

const items = [
  {
    icon: <DashboardIcon />,
    handle: () => null,
    label: 'Dashboard',
    match: true,
  },
];

test('renders the SidebarMenu', () => {
  const { container } = render(
    <SidebarMenu items={items} isExpanded={false} />,
  );
  expect(container).toMatchSnapshot();
});
