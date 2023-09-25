import React from 'react';
import { render } from '@test-utils/component-testing';
import { ListItem } from './ListItem';

test('renders the ListItem', () => {
  const { container } = render(<ListItem />);
  expect(container).toMatchSnapshot();
});
