import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormControlLabel, FormControlLabelProps } from '../FormControlLabel';
import { Radio } from '../../Radio/Radio';

export default {
  id: 'formControlLabel',
  title: 'Component API/FormControlLabel',
  component: FormControlLabel,
} as ComponentMeta<typeof FormControlLabel>;

export const Default: ComponentStory<typeof FormControlLabel> = (
  props: FormControlLabelProps,
) => <FormControlLabel {...props} />;

Default.args = {
  control: <Radio />,
  label: 'Form Control Label',
};
