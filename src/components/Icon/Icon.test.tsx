import React from 'react';
import { render } from '@test-utils/component-testing';
import { Icon } from './Icon';

test('renders the Icon', () => {
  const { container } = render(<Icon />);
  expect(container).toMatchSnapshot();
});
