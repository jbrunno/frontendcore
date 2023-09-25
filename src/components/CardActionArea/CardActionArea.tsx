import React from 'react';
import {
  CardActionArea as MuiCardActionArea,
  CardActionAreaProps as MuiCardActionAreaProps,
} from '@mui/material';

export type CardActionAreaProps = MuiCardActionAreaProps;

export function CardActionArea(props: CardActionAreaProps) {
  return <MuiCardActionArea {...props} />;
}

export default CardActionArea;
