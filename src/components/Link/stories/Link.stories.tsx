import { SyntheticEvent } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '../../Box/Box';
import Link, { LinkProps } from '../Link';

export default {
  id: 'link',
  component: Link,
  title: 'Navigation/Link',
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
    underline: {
      options: ['always', 'hover', 'none'],
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['primary', 'secondary', 'inherit'],
      control: {
        type: 'radio',
      },
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Link>;

const preventDefault = (event: SyntheticEvent) => event.preventDefault();

export const BasicLinks: ComponentStory<typeof Link> = (props: LinkProps) => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="/" {...props}>
        This is a Link
      </Link>
      <Link href="/" color="inherit" {...props}>
        This is a Link
      </Link>
      <Link href="/" variant="body2" {...props}>
        This is a Link
      </Link>
    </Box>
  );
};

export const UnderlinedLinks: ComponentStory<typeof Link> = (
  props: LinkProps,
) => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="/" underline="none" {...props}>
        This is a Link
      </Link>
      <Link href="/" underline="hover" {...props}>
        This is a Link
      </Link>
      <Link href="/" underline="always" {...props}>
        This is a Link
      </Link>
    </Box>
  );
};
