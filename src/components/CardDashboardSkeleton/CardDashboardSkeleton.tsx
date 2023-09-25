import React from 'react';
import { CardProps } from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';
import { CardContentStyled, CardStyled } from './CardDashboardSkeleton.styles';

type CardDashboardSkeletonProps = CardProps & {
  className?: string;
};

export function CardDashboardSkeleton({
  className,
  ...props
}: CardDashboardSkeletonProps) {
  return (
    <CardStyled className={className} {...props}>
      <CardContentStyled>
        <Skeleton
          sx={{
            gridColumn: 'span 2',
          }}
          variant="rectangular"
          height="100%"
        />

        <Skeleton variant="rectangular" height="100%" />
        <Skeleton variant="rectangular" height="100%" />
      </CardContentStyled>
    </CardStyled>
  );
}
export default CardDashboardSkeleton;
