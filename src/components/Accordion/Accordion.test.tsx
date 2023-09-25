import React from 'react';
import { render } from '@test-utils/component-testing';
import Accordion from './Accordion';
import AccordionSummary from '../AccordionSummary/AccordionSummary';
import AccordionDetails from '../AccordionDetails/AccordionDetails';

test('renders the Accordion', () => {
  const { container } = render(
    <Accordion>
      <AccordionSummary>Accordion Summary</AccordionSummary>
      <AccordionDetails>Accordion Details</AccordionDetails>
    </Accordion>,
  );
  expect(container).toMatchSnapshot();
});
