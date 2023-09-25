import type { ComponentStory, ComponentMeta } from '@storybook/react';
import OutlinedInput from '../OutlinedInput';

export default {
  title: 'Component API/OutlinedInput',
  component: OutlinedInput,
  argTypes: {
    placeholder: {
      control: {
        type: 'string',
        default: 'Please enter text',
      },
    },
  },
} as ComponentMeta<typeof OutlinedInput>;

export function Default(props: ComponentStory<typeof OutlinedInput>) {
  return <OutlinedInput {...props} />;
}
