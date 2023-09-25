import React from 'react';
import { render } from '@test-utils/component-testing';
import { RadioGroup } from './RadioGroup';
import { FormControlLabel } from '../FormControlLabel/FormControlLabel';
import { Radio } from '../Radio/Radio';

test('renders the RadioGroup', () => {
  const { container } = render(
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>,
  );
  expect(container).toMatchSnapshot();
});
