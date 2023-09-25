import React from 'react';
import { render } from '@test-utils/component-testing';
import { CircularProgress } from './CircularProgress';

test('renders the CircularProgress', () => {
  const { container } = render(
    <CircularProgress variant="indeterminate" color="info" />,
  );
  expect(container).toMatchSnapshot();
});
