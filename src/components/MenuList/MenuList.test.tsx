import React from 'react';
import { render } from '@test-utils/component-testing';
import { MenuList } from './MenuList';
import MenuItem from '../MenuItem/MenuItem';

test('renders the MenuList', () => {
  const { container } = render(
    <MenuList>
      <MenuItem>Item</MenuItem>
    </MenuList>,
  );
  expect(container).toMatchSnapshot();
});
