import React from 'react';
import { render } from '@test-utils/component-testing';
import Avatar from './Avatar';

test('renders the Avatar', () => {
  const { container } = render(<Avatar />);
  expect(container).toMatchSnapshot();
});
