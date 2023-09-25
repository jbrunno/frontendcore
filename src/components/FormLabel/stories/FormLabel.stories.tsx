import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormLabel, FormLabelProps } from '../FormLabel';

export default {
  id: 'formLabel',
  title: 'Component API/FormLabel',
  component: FormLabel,
} as ComponentMeta<typeof FormLabel>;

export const Default: ComponentStory<typeof FormLabel> = (
  props: FormLabelProps,
) => <FormLabel {...props} />;

Default.args = {
  id: 'form-label',
  children: 'Form Label',
};
