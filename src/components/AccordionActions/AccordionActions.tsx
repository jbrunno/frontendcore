import React from 'react';
import {
  AccordionActions as MuiAccordionActions,
  AccordionActionsProps as MuiAccordionActionsProps,
} from '@mui/material';

export type AccordionActionsProps = MuiAccordionActionsProps;

export function AccordionActions(props: AccordionActionsProps) {
  return <MuiAccordionActions {...props} />;
}

export default AccordionActions;
