import Box from '@/components/Box/Box';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { InternationalPhoneField } from '../InternationalPhoneField';

export default {
  title: '@CRM/InternationalPhoneField',
  component: InternationalPhoneField,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'error',
          'info',
          'success',
          'warning',
        ],
      },
    },
  },
} as ComponentMeta<typeof InternationalPhoneField>;

export const Default: ComponentStory<typeof InternationalPhoneField> = (
  props,
) => (
  <Box p={2}>
    <InternationalPhoneField {...props} specialLabel="Telefone" />
  </Box>
);

export const Error: ComponentStory<typeof InternationalPhoneField> = (
  props,
) => (
  <Box p={2}>
    <InternationalPhoneField {...props} specialLabel="Telefone" enableSearch />
  </Box>
);

Error.args = {
  error: 'O telefone não é válido.',
};
