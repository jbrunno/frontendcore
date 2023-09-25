import React from 'react';
import { render } from '@test-utils/component-testing';
import OutlinedInput from './OutlinedInput';

test('renders the OutlinedInput', () => {
  const { container } = render(
    <OutlinedInput placeholder="Please enter text" />,
  );
  expect(container).toMatchSnapshot();
});
