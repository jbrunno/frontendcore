import React from 'react';
import { render } from '@test-utils/component-testing';
import Typography from './Typography';

test('renders the Typography', () => {
  const { container } = render(<Typography />);
  expect(container).toMatchSnapshot();
});
