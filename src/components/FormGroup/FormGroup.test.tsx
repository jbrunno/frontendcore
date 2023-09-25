import React from 'react';
import { render } from '@test-utils/component-testing';
import { FormGroup } from './FormGroup';

test('renders the FormGroup', () => {
  const { container } = render(<FormGroup />);
  expect(container).toMatchSnapshot();
});
