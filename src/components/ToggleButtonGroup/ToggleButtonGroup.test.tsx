import React from 'react';
import { render } from '@test-utils/component-testing';
import { ToggleButtonGroup } from './ToggleButtonGroup';

test('renders the ToggleButtonGroup', () => {
  const { container } = render(<ToggleButtonGroup />);
  expect(container).toMatchSnapshot();
});
