import React from 'react';
import { render } from '@test-utils/component-testing';
import { TextField } from './TextField';

test('renders the TextField', () => {
  const { container } = render(
    <TextField
      isTouched
      errorText="Error text"
      helperText="Helper text"
      error
    />,
  );
  expect(container).toMatchSnapshot();
});
