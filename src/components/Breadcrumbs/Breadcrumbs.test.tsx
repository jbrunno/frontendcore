import React from 'react';
import { render } from '@test-utils/component-testing';
import { Breadcrumbs } from './Breadcrumbs';

test('renders the Breadcrumbs', () => {
  const { container } = render(<Breadcrumbs />);
  expect(container).toMatchSnapshot();
});
