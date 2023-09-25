import React from 'react';
import { render } from '@test-utils/component-testing';
import { Snackbar } from './Snackbar';

test('renders the Snackbar', () => {
  const { container } = render(<Snackbar />);
  expect(container).toMatchSnapshot();
});
