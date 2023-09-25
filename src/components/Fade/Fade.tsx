import React from 'react';
import { Fade as MuiFade, FadeProps as MuiFadeProps } from '@mui/material';

export type FadeProps = MuiFadeProps;

export function Fade(props: FadeProps) {
  return <MuiFade {...props} />;
}

export default Fade;
