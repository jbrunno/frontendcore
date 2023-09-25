import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowForward } from '@mui/icons-material';
import Icon from '../Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export function Default(props: ComponentStory<typeof Icon>) {
  return (
    <Icon fontSize="medium" {...props}>
      <ArrowForward fontSize="inherit" color="inherit" />
    </Icon>
  );
}
