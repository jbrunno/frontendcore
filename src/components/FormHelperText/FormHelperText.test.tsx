import React from 'react';
import { render } from '@test-utils/component-testing';
import { FormHelperText } from './FormHelperText';

test('renders the FormHelperText', () => {
  const { container } = render(<FormHelperText />);
  expect(container).toMatchSnapshot();
});
