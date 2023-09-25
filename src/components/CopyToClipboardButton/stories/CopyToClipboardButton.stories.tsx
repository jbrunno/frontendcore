import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToastContainer } from '@/components';
import Box from '../../Box/Box';

import { CopyToClipboardButton } from '../CopyToClipboardButton';

export default {
  id: 'CopyToClipboardButton',
  title: '@CRM/CopyToClipboardButton',
  component: CopyToClipboardButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://www.google.com',
    },
    tooltip: {
      control: {
        type: 'text',
      },
      defaultValue: 'Copiar link',
    },
  },
} as ComponentMeta<typeof CopyToClipboardButton>;

export const Default: ComponentStory<typeof CopyToClipboardButton> = (
  props,
) => (
  <Box display="flex" alignItems="center">
    <CopyToClipboardButton {...props} />
    <ToastContainer />
  </Box>
);
