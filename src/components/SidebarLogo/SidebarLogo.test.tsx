import { render } from '@test-utils/component-testing';
import React from 'react';
import { SidebarLogo } from './SidebarLogo';

test('renders the SidebarLogo', () => {
  const { container } = render(<SidebarLogo isExpanded />);
  expect(container).toMatchSnapshot();
});
