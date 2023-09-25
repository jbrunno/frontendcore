import React from 'react';
import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from '@mui/material';

export type SkeletonProps = MuiSkeletonProps;

export function Skeleton(props: SkeletonProps) {
  return <MuiSkeleton {...props} />;
}

export default Skeleton;
