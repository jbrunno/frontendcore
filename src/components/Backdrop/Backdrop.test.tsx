import React from 'react';
import { render } from '@test-utils/component-testing';
import { Backdrop } from './Backdrop';

test('renders the Backdrop', () => {
  const { container } = render(<Backdrop open />);
  expect(container).toMatchSnapshot();
});
