import React from 'react';
import { render } from '@test-utils/component-testing';
import Collapse from './Collapse';

test('renders the Collapse', () => {
  const { container } = render(<Collapse />);
  expect(container).toMatchSnapshot();
});
