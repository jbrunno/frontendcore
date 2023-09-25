import React from 'react';
import Card from '../Card/Card';
import CardHeader from '../CardHeader/CardHeader';
import Skeleton from '../Skeleton/Skeleton';
import Table from '../Table/Table';
import TableCell from '../TableCell/TableCell';

type CardSkeletonProps = {
  className?: string;
};

export function CardSkeleton({ className }: CardSkeletonProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <Skeleton variant="rectangular" height={20} animation="wave" />
      </CardHeader>
      <Table bodyData={[{}, {}, {}, {}]}>
        {(_, index) => (
          <TableCell key={index}>
            <Skeleton variant="rectangular" height={20} animation="wave" />
          </TableCell>
        )}
      </Table>
    </Card>
  );
}

export default CardSkeleton;
