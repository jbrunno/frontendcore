import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioGroup } from '../RadioGroup';
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel';
import { Radio } from '../../Radio/Radio';

export default {
  id: 'radioGroup',
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Default = (props: ComponentStory<typeof RadioGroup>) => (
  <RadioGroup {...props}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
);

Default.args = {
  defaultValue: 'female',
  name: 'radio-buttons-group',
};
