import React from 'react';
import { render } from '@test-utils/component-testing';
import { List } from './List';

test('renders the List', () => {
  const { container } = render(<List />);
  expect(container).toMatchSnapshot();
});
