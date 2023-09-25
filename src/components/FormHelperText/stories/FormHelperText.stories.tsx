import type { ComponentMeta, ComponentStory } from '@storybook/react';
import FormControl from '../../FormControl/FormControl';
import Input from '../../Input/Input';
import InputLabel from '../../InputLabel/InputLabel';
import { FormHelperText } from '../FormHelperText';

export default {
  id: 'formGroup',
  title: 'Component API/FormHelperText',
  component: FormHelperText,
} as ComponentMeta<typeof FormHelperText>;

export function Default(props: ComponentStory<typeof FormHelperText>) {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="component-helper">Name</InputLabel>
      <Input id="component-helper" aria-describedby="component-helper-text" />
      <FormHelperText id="component-helper-text" {...props}>
        Some important helper text
      </FormHelperText>
    </FormControl>
  );
}
