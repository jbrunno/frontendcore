import React from 'react';
import { render } from '@test-utils/component-testing';
import ListItemButton from './ListItemButton';

test('renders the ListItemButton', () => {
  const { container } = render(<ListItemButton />);
  expect(container).toMatchSnapshot();
});
