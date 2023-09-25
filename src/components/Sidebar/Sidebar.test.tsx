import { render } from '@test-utils/component-testing';
import React from 'react';
import { Sidebar } from './Sidebar';

test('renders the Sidebar', () => {
  const { container } = render(<Sidebar />);
  expect(container).toMatchSnapshot();
});
