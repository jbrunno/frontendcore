import React from 'react';
import { render } from '@test-utils/component-testing';
import { DialogTitle } from './DialogTitle';

test('renders the DialogTitle', () => {
  const { container } = render(<DialogTitle />);
  expect(container).toMatchSnapshot();
});
