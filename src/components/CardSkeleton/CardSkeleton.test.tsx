import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardSkeleton } from './CardSkeleton';

test('renders the CardSkeleton', () => {
  const { container } = render(<CardSkeleton className="card-skeleton" />);
  expect(container).toMatchSnapshot();
});
