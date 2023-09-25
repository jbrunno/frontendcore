import React from 'react';
import { render } from '@test-utils/component-testing';
import { DialogActions } from './DialogActions';

test('renders the DialogActions', () => {
  const { container } = render(<DialogActions />);
  expect(container).toMatchSnapshot();
});
