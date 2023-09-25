import React from 'react';
import { render } from '@test-utils/component-testing';
import { MenuItem } from './MenuItem';

test('renders the MenuItem', () => {
  const { container } = render(<MenuItem>Item</MenuItem>);
  expect(container).toMatchSnapshot();
});
