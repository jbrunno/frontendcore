import React from 'react';
import { render } from '@test-utils/component-testing';
import { Badge } from './Badge';

test('renders the Badge', () => {
  const { container } = render(<Badge />);
  expect(container).toMatchSnapshot();
});
