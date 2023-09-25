import React from 'react';
import { render } from '@test-utils/component-testing';
import { LinearProgress } from './LinearProgress';

test('renders the LinearProgress', () => {
  const { container } = render(
    <LinearProgress variant="indeterminate" color="info" />,
  );
  expect(container).toMatchSnapshot();
});
