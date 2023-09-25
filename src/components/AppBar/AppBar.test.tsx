import React from 'react';
import { render } from '@test-utils/component-testing';
import { AppBar } from './AppBar';

test('renders the AppBar', () => {
  const { container } = render(<AppBar />);
  expect(container).toMatchSnapshot();
});
