import React from 'react';
import { render } from '@test-utils/component-testing';
import { Menu } from './Menu';
import MenuItem from '../MenuItem/MenuItem';

test('renders the Menu', () => {
  const anchor = document.createElement('div');
  const { container } = render(
    <Menu open anchorEl={anchor}>
      <MenuItem>Item</MenuItem>
    </Menu>,
  );
  expect(container).toMatchSnapshot();
});
