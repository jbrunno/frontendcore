import React from 'react';
import { render } from '@test-utils/component-testing';
import { ToggleButton } from './ToggleButton';

test('renders the ToggleButton', () => {
  const { container } = render(<ToggleButton value="left" />);
  expect(container).toMatchSnapshot();
});
