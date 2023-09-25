import React from 'react';
import { Zoom as MuiZoom, ZoomProps as MuiZoomProps } from '@mui/material';

export type ZoomProps = MuiZoomProps;

export function Zoom(props: ZoomProps) {
  return <MuiZoom {...props} />;
}

export default Zoom;
