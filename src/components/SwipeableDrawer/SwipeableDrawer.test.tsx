import React from 'react';
import { render } from '@test-utils/component-testing';
import { SwipeableDrawer } from './SwipeableDrawer';

test('renders the SwipeableDrawer', () => {
  const { container } = render(
    <SwipeableDrawer onClose={() => null} open onOpen={() => null} />,
  );
  expect(container).toMatchSnapshot();
});
