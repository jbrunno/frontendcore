import React from 'react';
import { render } from '@test-utils/component-testing';
import { InputLabel } from './InputLabel';

test('renders the InputLabel', () => {
  const { container } = render(<InputLabel />);
  expect(container).toMatchSnapshot();
});
