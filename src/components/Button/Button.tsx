import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { ButtonStyled, ButtonStyledProps } from './Button.styles';

export type ButtonProps = MuiButtonProps & ButtonStyledProps;

export function Button(props: ButtonProps) {
  return <ButtonStyled {...props} />;
}

export default Button;
