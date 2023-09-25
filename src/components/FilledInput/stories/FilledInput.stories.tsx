import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FilledInput } from '../FilledInput';
import FormControl from '../../FormControl/FormControl';
import InputLabel from '../../InputLabel/InputLabel';

export default {
  id: 'filledInput',
  title: 'Component API/FilledInput',
  component: FilledInput,
} as ComponentMeta<typeof FilledInput>;

export function Default(props: ComponentStory<typeof FilledInput>) {
  return (
    <FormControl variant="filled">
      <InputLabel htmlFor="component-filled">Name</InputLabel>
      <FilledInput id="component-filled" {...props} />
    </FormControl>
  );
}
