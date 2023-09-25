import React from 'react';
import {
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
} from '@mui/material';

export type CardHeaderProps = MuiCardHeaderProps;

export function CardHeader(props: CardHeaderProps) {
  return <MuiCardHeader {...props} />;
}

export default CardHeader;
