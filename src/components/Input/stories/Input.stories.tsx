import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../Input';

export default {
  title: 'Component API/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export function Default(props: ComponentStory<typeof Input>) {
  return <Input {...props} />;
}
