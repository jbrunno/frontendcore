import React from 'react';
import { render } from '@test-utils/component-testing';
import { Select } from './Select';
import MenuItem from '../MenuItem/MenuItem';

test('renders the Select', () => {
  const { container } = render(
    <Select value="1">
      <MenuItem value="1">Option 1</MenuItem>
      <MenuItem value="2">Option 2</MenuItem>
    </Select>,
  );
  expect(container).toMatchSnapshot();
});
