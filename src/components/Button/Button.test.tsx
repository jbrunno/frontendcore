import React from 'react';
import { render } from '@test-utils/component-testing';
import { Button } from './Button';

test('renders the Button', () => {
  const { container } = render(<Button textTransform="uppercase" />);
  expect(container).toMatchSnapshot();
});
