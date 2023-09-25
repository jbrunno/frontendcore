import React from 'react';
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
} from '@mui/material';

export type AccordionProps = MuiAccordionProps;

export function Accordion(props: AccordionProps) {
  return <MuiAccordion {...props} />;
}

export default Accordion;
