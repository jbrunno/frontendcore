import React from 'react';
import { render } from '@test-utils/component-testing';
import ListItemIcon from './ListItemIcon';

test('renders the ListItemIcon', () => {
  const { container } = render(<ListItemIcon />);
  expect(container).toMatchSnapshot();
});
