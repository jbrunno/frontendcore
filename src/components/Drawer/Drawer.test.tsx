import React from 'react';
import { render } from '@test-utils/component-testing';
import { Drawer } from './Drawer';

test('renders the Drawer', () => {
  const { container } = render(<Drawer />);
  expect(container).toMatchSnapshot();
});
