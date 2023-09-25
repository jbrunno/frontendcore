import React from 'react';
import { render } from '@test-utils/component-testing';
import AccordionDetails from './AccordionDetails';

test('renders the AccordionDetails', () => {
  const { container } = render(
    <AccordionDetails>Accordion Summary</AccordionDetails>,
  );
  expect(container).toMatchSnapshot();
});
