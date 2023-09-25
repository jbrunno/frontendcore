import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from '../Radio';

export default {
  id: 'radio',
  title: 'Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

export const Default = (props: ComponentStory<typeof Radio>) => (
  <Radio {...props} />
);
