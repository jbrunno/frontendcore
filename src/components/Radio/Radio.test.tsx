import React from 'react';
import { render } from '@test-utils/component-testing';
import { Radio } from './Radio';

test('renders the Radio', () => {
  const { container } = render(<Radio />);
  expect(container).toMatchSnapshot();
});
