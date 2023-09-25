import React from 'react';
import { render } from '@test-utils/component-testing';

import { BottomNavigationAction } from './BottomNavigationAction';

test('renders the BottomNavigationAction', () => {
  const { container } = render(<BottomNavigationAction />);
  expect(container).toMatchSnapshot();
});
