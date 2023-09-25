import React from 'react';
import { render } from '@test-utils/component-testing';
import { InputBase } from './InputBase';

test('renders the InputBase', () => {
  const { container } = render(<InputBase />);
  expect(container).toMatchSnapshot();
});
