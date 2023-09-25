import React from 'react';
import { render } from '@test-utils/component-testing';
import { FormControlLabel } from './FormControlLabel';
import { Radio } from '../Radio/Radio';

test('renders the FormControlLabel', () => {
  const { container } = render(
    <FormControlLabel control={<Radio />} label="Form Control Label" />,
  );
  expect(container).toMatchSnapshot();
});
