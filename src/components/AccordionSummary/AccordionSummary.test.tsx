import React from 'react';
import { render } from '@test-utils/component-testing';
import AccordionSummary from './AccordionSummary';

test('renders the AccordionSummary', () => {
  const { container } = render(
    <AccordionSummary>Accordion Summary</AccordionSummary>,
  );
  expect(container).toMatchSnapshot();
});
