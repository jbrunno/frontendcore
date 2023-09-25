import React from 'react';
import { render } from '@test-utils/component-testing';

import { BottomNavigation } from './BottomNavigation';

test('renders the BottomNavigation', () => {
  const { container } = render(<BottomNavigation />);
  expect(container).toMatchSnapshot();
});
