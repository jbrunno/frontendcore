import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputBase } from '../InputBase';

export default {
  title: 'Component API/InputBase',
  component: InputBase,
} as ComponentMeta<typeof InputBase>;

export function Default(props: ComponentStory<typeof InputBase>) {
  return <InputBase {...props} />;
}
