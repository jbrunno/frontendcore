import React from 'react';
import {
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material';

export type CardActionsProps = MuiCardActionsProps;

export function CardActions(props: CardActionsProps) {
  return <MuiCardActions {...props} />;
}

export default CardActions;
