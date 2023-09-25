import React from 'react';
import { render } from '@test-utils/component-testing';
import { TreeView } from './TreeView';

test('renders the TreeView', () => {
  const { container } = render(<TreeView />);
  expect(container).toMatchSnapshot();
});
