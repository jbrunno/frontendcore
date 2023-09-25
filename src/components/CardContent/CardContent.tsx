import React from 'react';
import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
} from '@mui/material';

export type CardContentProps = MuiCardContentProps;

export function CardContent(props: CardContentProps) {
  return <MuiCardContent {...props} />;
}

export default CardContent;
