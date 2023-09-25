import React from 'react';
import { render } from '@test-utils/component-testing';
import ListSubheader from './ListSubheader';

test('renders the ListSubheader', () => {
  const { container } = render(<ListSubheader />);
  expect(container).toMatchSnapshot();
});
