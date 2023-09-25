import React from 'react';
import { render } from '@test-utils/component-testing';
import { ButtonGroup } from './ButtonGroup';

test('renders the ButtonGroup', () => {
  const { container } = render(<ButtonGroup />);
  expect(container).toMatchSnapshot();
});
