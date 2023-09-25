import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputLabel, InputLabelProps } from '../InputLabel';

export default {
  id: 'inputLabel',
  title: 'Component API/InputLabel',
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

export const Default: ComponentStory<typeof InputLabel> = (
  props: InputLabelProps,
) => {
  return <InputLabel {...props} />;
};

Default.args = {
  children: 'Label',
};
