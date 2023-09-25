import React from 'react';
import { render } from '@test-utils/component-testing';
import { Fab } from './Fab';

test('renders the Fab', () => {
  const { container } = render(<Fab />);
  expect(container).toMatchSnapshot();
});
