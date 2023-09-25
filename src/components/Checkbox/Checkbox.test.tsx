import React from 'react';
import { render } from '@test-utils/component-testing';
import { Checkbox } from './Checkbox';

test('renders the Checkbox', () => {
  const { container } = render(<Checkbox />);
  expect(container).toMatchSnapshot();
});
