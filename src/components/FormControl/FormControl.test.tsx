import React from 'react';
import { render } from '@test-utils/component-testing';
import { FormControl } from './FormControl';

test('renders the FormControl', () => {
  const { container } = render(<FormControl />);
  expect(container).toMatchSnapshot();
});
