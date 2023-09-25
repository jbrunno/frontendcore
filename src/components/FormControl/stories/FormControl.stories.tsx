import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormControl, FormControlProps } from '../FormControl';
import { Radio } from '../../Radio/Radio';
import { FormLabel } from '../../FormLabel/FormLabel';
import { RadioGroup } from '../../RadioGroup/RadioGroup';
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel';

export default {
  id: 'formControl',
  title: 'Component API/FormControl',
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = (
  props: FormControlProps,
) => (
  <FormControl {...props}>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  </FormControl>
);
