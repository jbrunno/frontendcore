import React from 'react';
import { render } from '@test-utils/component-testing';
import ListItemAvatar from './ListItemAvatar';

test('renders the ListItemAvatar', () => {
  const { container } = render(<ListItemAvatar />);
  expect(container).toMatchSnapshot();
});
