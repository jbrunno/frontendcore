import React from 'react';
import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from '@mui/material';

export type SliderProps = MuiSliderProps;

export function Slider(props: SliderProps) {
  return <MuiSlider {...props} />;
}

export default Slider;
