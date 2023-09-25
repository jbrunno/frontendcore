import React from 'react';
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

export type GridProps = MuiGridProps;

export function Grid(props: GridProps) {
  return <MuiGrid {...props} />;
}

export default Grid;
