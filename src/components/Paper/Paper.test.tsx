import React from 'react';
import { render } from '@test-utils/component-testing';
import { Paper } from './Paper';

test('renders the Paper', () => {
  const { container } = render(<Paper />);
  expect(container).toMatchSnapshot();
});
