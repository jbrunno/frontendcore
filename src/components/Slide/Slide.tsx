import React from 'react';
import { Slide as MuiSlide, SlideProps as MuiSlideProps } from '@mui/material';

export type SlideProps = MuiSlideProps;

export function Slide(props: SlideProps) {
  return <MuiSlide {...props} />;
}

export default Slide;
