import React from 'react';
import { render } from '@test-utils/component-testing';
import { Skeleton } from './Skeleton';

test('renders the Skeleton', () => {
  const { container } = render(
    <Skeleton variant="circular" animation="pulse" />,
  );
  expect(container).toMatchSnapshot();
});
