import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

export default {
  title: 'Components/ButtonBase',
  component: ButtonBase,
} as ComponentMeta<typeof ButtonBase>;

export const Default: ComponentStory<typeof ButtonBase> = (
  props: ButtonBaseProps,
) => <ButtonBase {...props} />;

Default.args = {
  children: 'ButtonBase',
};
