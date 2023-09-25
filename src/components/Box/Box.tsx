import React from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';

export type BoxProps = MuiBoxProps;

export function Box(props: BoxProps) {
  return <MuiBox {...props} />;
}

export default Box;
