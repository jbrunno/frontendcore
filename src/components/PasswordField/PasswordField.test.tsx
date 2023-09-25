import React from 'react';
import { render } from '@test-utils/component-testing';
import { PasswordField } from './PasswordField';

test('renders the PasswordField', () => {
  const { container } = render(
    <PasswordField
      isTouched
      errorText="Error text"
      helperText="Helper text"
      error
    />,
  );
  expect(container).toMatchSnapshot();
});
