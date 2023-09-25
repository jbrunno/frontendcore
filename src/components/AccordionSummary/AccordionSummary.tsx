import React from 'react';
import {
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps as MuiAccordionSummaryProps,
} from '@mui/material';

export type AccordionSummaryProps = MuiAccordionSummaryProps;

export function AccordionSummary(props: AccordionSummaryProps) {
  return <MuiAccordionSummary {...props} />;
}

export default AccordionSummary;
