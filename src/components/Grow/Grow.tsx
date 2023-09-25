import React from 'react';
import { Grow as MuiGrow, GrowProps as MuiGrowProps } from '@mui/material';

export type GrowProps = MuiGrowProps;

export function Grow(props: GrowProps) {
  return <MuiGrow {...props} />;
}

export default Grow;
