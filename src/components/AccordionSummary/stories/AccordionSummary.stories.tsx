import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AccordionSummary from '../AccordionSummary';

export default {
  id: 'accordionSummary',
  title: 'Component API/AccordionSummary',
  component: AccordionSummary,
} as ComponentMeta<typeof AccordionSummary>;

export const Default: ComponentStory<typeof AccordionSummary> = (args) => (
  <AccordionSummary {...args} />
);

export const src = Default.bind({});
src.args = {
  id: 'accordion-summary',
  children: 'Accordion Summary',
};
