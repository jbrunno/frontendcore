import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paper } from '../Paper';
import { Box } from '../../Box/Box';

export default {
  id: 'paper',
  title: 'Surfaces/Paper',
  component: Paper,
  argTypes: {
    elevation: {
      options: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
      ],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['elevation', 'outlined'],
      control: {
        type: 'select',
      },
    },
    square: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Paper>;

export const Default = (props: ComponentStory<typeof Paper>) => (
  <Paper {...props}>
    <Box height={128} width={128} />
  </Paper>
);
