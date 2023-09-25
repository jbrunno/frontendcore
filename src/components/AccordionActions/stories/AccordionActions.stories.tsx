import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AccordionActions from '../AccordionActions';

export default {
  id: 'accordionActions',
  title: 'Component API/AccordionActions',
  component: AccordionActions,
} as ComponentMeta<typeof AccordionActions>;

export const Default: ComponentStory<typeof AccordionActions> = (args) => (
  <AccordionActions {...args} />
);

export const src = Default.bind({});
src.args = {
  id: 'accordion-actions',
  children: 'Accordion actions',
};
