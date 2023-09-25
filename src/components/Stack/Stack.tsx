import React from 'react';
import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

export type StackProps = MuiStackProps;

export function Stack(props: StackProps) {
  return <MuiStack {...props} />;
}

export default Stack;
