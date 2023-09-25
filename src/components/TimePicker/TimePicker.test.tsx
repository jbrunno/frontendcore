import React from 'react';
import { render } from '@test-utils/component-testing';
import { TimePicker } from './TimePicker';
import { TextField, TextFieldProps } from '../TextField/TextField';

test('renders the TimePicker', () => {
  const { container } = render(
    <TimePicker
      value={new Date(2022, 6, 5, 15, 48, 0, 0)}
      onChange={() => new Date(2022, 6, 5, 15, 48, 0, 0)}
      renderInput={(params: TextFieldProps) => <TextField {...params} />}
    />,
  );
  expect(container).toMatchSnapshot();
});
