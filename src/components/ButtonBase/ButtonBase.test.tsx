import React from 'react';
import { render } from '@test-utils/component-testing';
import { ButtonBase } from './ButtonBase';

test('renders the ButtonBase', () => {
  const { container } = render(<ButtonBase />);
  expect(container).toMatchSnapshot();
});
