import React from 'react';
import { render } from '@test-utils/component-testing';
import { Divider } from './Divider';

test('renders the Divider', () => {
  const { container } = render(<Divider textAlign="center">Test</Divider>);
  expect(container).toMatchSnapshot();
});
