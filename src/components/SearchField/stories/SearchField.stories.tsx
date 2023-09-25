import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchField } from '../SearchField';

export default {
  id: 'searchField',
  title: 'Components/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

export const Default = (props: ComponentStory<typeof SearchField>) => (
  <SearchField {...props} />
);

Default.args = {
  label: 'Search Field',
  variant: 'outlined',
  size: 'small',
};
