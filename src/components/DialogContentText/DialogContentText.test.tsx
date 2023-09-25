import React from 'react';
import { render } from '@test-utils/component-testing';
import { DialogContentText } from './DialogContentText';

test('renders the DialogContentText', () => {
  const { container } = render(<DialogContentText />);
  expect(container).toMatchSnapshot();
});
