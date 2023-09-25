import React from 'react';
import { render } from '@test-utils/component-testing';
import { SidebarUser } from './SidebarUser';

test('renders the SidebarUser', () => {
  const { container } = render(
    <SidebarUser
      user={{ name: 'Adriano Oliveira' }}
      handleLogOut={() => null}
    />,
  );
  expect(container).toMatchSnapshot();
});
