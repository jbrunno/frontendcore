import React from 'react';
import { render } from '@test-utils/component-testing';
import { Toolbar } from './Toolbar';

test('renders the Toolbar', () => {
  const { container } = render(<Toolbar />);
  expect(container).toMatchSnapshot();
});
