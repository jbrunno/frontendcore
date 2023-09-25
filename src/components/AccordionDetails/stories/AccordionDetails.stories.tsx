import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AccordionDetails from '../AccordionDetails';

export default {
  id: 'accordionDetails',
  title: 'Component API/AccordionDetails',
  component: AccordionDetails,
} as ComponentMeta<typeof AccordionDetails>;

export const Default: ComponentStory<typeof AccordionDetails> = (args) => (
  <AccordionDetails {...args} />
);

export const src = Default.bind({});
src.args = {
  id: 'accordion-details',
  children: 'Accordion Details',
};
