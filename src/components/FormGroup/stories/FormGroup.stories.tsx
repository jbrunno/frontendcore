import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from '../../Checkbox/Checkbox';
import FormControlLabel from '../../FormControlLabel/FormControlLabel';
import { FormGroup } from '../FormGroup';

export default {
  id: 'formGroup',
  title: 'Component API/FormGroup',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>;

export function Default(props: ComponentStory<typeof FormGroup>) {
  return (
    <FormGroup {...props}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
}
