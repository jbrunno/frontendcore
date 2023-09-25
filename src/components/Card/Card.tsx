import React from 'react';
import { CardProps as MuiCardProps } from '@mui/material';
import { CardStyled } from './Card.styles';

export type CardProps = MuiCardProps;

export function Card(props: CardProps) {
  return <CardStyled {...props} />;
}

export default Card;
