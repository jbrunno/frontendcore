import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../Typography';

export default {
  id: 'typography',
  title: 'Data Display/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
        'inherit',
      ],
      control: {
        type: 'select',
      },
    },
    align: {
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Typography>;

export const Default = (props: ComponentStory<typeof Typography>) => (
  <Typography {...props}>Typography</Typography>
);
