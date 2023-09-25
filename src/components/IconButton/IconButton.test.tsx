import React from 'react';
import { render } from '@test-utils/component-testing';
import { IconButton } from './IconButton';

test('renders the IconButton', () => {
  const { container } = render(<IconButton />);
  expect(container).toMatchSnapshot();
});
