import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

export type ChipProps = MuiChipProps;

export function Chip(props: ChipProps) {
  return <MuiChip {...props} />;
}

export default Chip;
