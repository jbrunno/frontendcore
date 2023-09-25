import React from 'react';
import { render } from '@test-utils/component-testing';
import { TreeItem } from './TreeItem';

test('renders the TreeItem', () => {
  const { container } = render(<TreeItem nodeId="1" />);
  expect(container).toMatchSnapshot();
});
