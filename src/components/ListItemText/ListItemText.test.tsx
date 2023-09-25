import React from 'react';
import { render } from '@test-utils/component-testing';
import ListItemText from './ListItemText';

test('renders the ListItemText', () => {
  const { container } = render(<ListItemText />);
  expect(container).toMatchSnapshot();
});
