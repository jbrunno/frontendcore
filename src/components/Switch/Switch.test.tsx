import React from 'react';
import { render } from '@test-utils/component-testing';
import Switch from './Switch';

test('renders the Switch', () => {
  const { container } = render(<Switch />);
  expect(container).toMatchSnapshot();
});
