import React from 'react';
import { render } from '@test-utils/component-testing';
import { Chip } from './Chip';

test('renders the Chip', () => {
  const { container } = render(<Chip />);
  expect(container).toMatchSnapshot();
});
