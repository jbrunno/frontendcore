import React from 'react';
import { render } from '@test-utils/component-testing';
import { InputAdornment } from './InputAdornment';

test('renders the InputAdornment', () => {
  const { container } = render(<InputAdornment position="start" />);
  expect(container).toMatchSnapshot();
});
