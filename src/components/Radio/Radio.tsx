import React from 'react';
import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

export type RadioProps = MuiRadioProps;

export function Radio(props: RadioProps) {
  return <MuiRadio {...props} />;
}

export default Radio;
