import React from 'react';
import {
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from '@mui/material';

export type AccordionDetailsProps = MuiAccordionDetailsProps;

export function AccordionDetails(props: AccordionDetailsProps) {
  return <MuiAccordionDetails {...props} />;
}

export default AccordionDetails;
