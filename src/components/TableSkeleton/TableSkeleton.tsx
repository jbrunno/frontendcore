import React from 'react';
import Skeleton from '../Skeleton/Skeleton';
import TableBody from '../TableBody/TableBody';
import TableCell from '../TableCell/TableCell';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
import { TableStyled } from './TableSkeleton.styles';

type TableSkeletonProps = {
  rows: number;
};

export function TableSkeleton({ rows }: TableSkeletonProps) {
  return (
    <TableStyled>
      <TableHead>
        <TableRow>
          <TableCell>
            <Skeleton variant="rectangular" height={20} animation="wave" />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: rows }).map((_, index) => {
          const key = index;
          return (
            <TableRow key={key}>
              <TableCell>
                <Skeleton variant="text" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </TableStyled>
  );
}

export default TableSkeleton;
