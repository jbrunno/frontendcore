import React from 'react';
import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material';

export type FabProps = MuiFabProps;

export function Fab({ children, ...props }: FabProps) {
  return <MuiFab {...props}>{children}</MuiFab>;
}

export default Fab;
