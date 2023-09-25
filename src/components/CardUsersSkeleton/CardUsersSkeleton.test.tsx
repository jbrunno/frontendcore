import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardUsersSkeleton } from './CardUsersSkeleton';

test('renders the CardUsersSkeleton', () => {
  const { container } = render(<CardUsersSkeleton />);
  expect(container).toMatchSnapshot();
});
