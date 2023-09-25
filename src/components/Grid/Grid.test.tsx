import React from 'react';
import { render } from '@test-utils/component-testing';
import { Grid } from './Grid';

test('renders the Grid', () => {
  const { container } = render(<Grid />);
  expect(container).toMatchSnapshot();
});
