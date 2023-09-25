import React from 'react';
import { render } from '@test-utils/component-testing';
import { DatePicker } from './DatePicker';
import { TextField, TextFieldProps } from '../TextField/TextField';

test('renders the DatePicker', () => {
  const { container } = render(
    <DatePicker
      value={new Date(2022, 6, 5)}
      onChange={() => new Date(2022, 6, 5)}
      renderInput={(props: TextFieldProps) => <TextField {...props} />}
    />,
  );
  expect(container).toMatchSnapshot();
});
