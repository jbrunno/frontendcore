import React, { ElementType } from 'react';
import {
  CardMedia as MuiCardMedia,
  CardMediaProps as MuiCardMediaProps,
} from '@mui/material';

export type CardMediaProps = MuiCardMediaProps & {
  component?: ElementType;
};

export function CardMedia(props: CardMediaProps) {
  return <MuiCardMedia {...props} />;
}

export default CardMedia;
