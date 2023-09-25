import React from 'react';
import { render } from '@test-utils/component-testing';
import { FormLabel } from './FormLabel';

test('renders the FormLabel', () => {
  const { container } = render(<FormLabel />);
  expect(container).toMatchSnapshot();
});
