import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SnackbarContent } from '../SnackbarContent';

export default {
  title: 'Component API/SnackbarContent',
  component: SnackbarContent,
} as ComponentMeta<typeof SnackbarContent>;

export const Default: ComponentStory<typeof SnackbarContent> = (props) => (
  <SnackbarContent
    message={
      'I love candy. I love cookies. I love cupcakes. \
      I love cheesecake. I love chocolate.'
    }
    {...props}
  />
);
