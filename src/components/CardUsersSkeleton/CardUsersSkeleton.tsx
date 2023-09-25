import React from 'react';
import Box from '../Box/Box';
import { CardProps } from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';
import { CardStyled, SkeletonStyled } from './CardUsersSkeleton.styles';

type CardUsersSkeletonProps = CardProps;

export function CardUsersSkeleton(props: CardUsersSkeletonProps) {
  return (
    <CardStyled {...props}>
      <SkeletonStyled variant="rectangular" width={64} height={64} />
      <Box>
        <Skeleton variant="text" height={24} />
        <Skeleton variant="text" height={15} />
      </Box>
    </CardStyled>
  );
}

export default CardUsersSkeleton;
