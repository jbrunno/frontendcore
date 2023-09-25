import React from 'react';
import { render } from '@test-utils/component-testing';
import { ToastContainer } from './ToastContainer';

test('renders the Card', () => {
  const { container } = render(<ToastContainer />);
  expect(container).toMatchSnapshot();
});
