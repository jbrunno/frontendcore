import React from 'react';
import { render } from '@test-utils/component-testing';
import { Input } from './Input';

test('renders the Input', () => {
  const { container } = render(<Input />);
  expect(container).toMatchSnapshot();
});
