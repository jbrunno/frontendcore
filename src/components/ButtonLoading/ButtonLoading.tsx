import React from 'react';
import Button, { ButtonProps } from '../Button/Button';
import CircularProgress from '../CircularProgress/CircularProgress';

export type ButtonLoadingProps = ButtonProps & {
  isLoading: boolean;
};

const sizeLoading = {
  small: 22,
  medium: 24,
  large: 26,
};

export function ButtonLoading({
  isLoading,
  children,
  size = 'medium',
  ...props
}: ButtonLoadingProps) {
  return (
    <Button size={size} {...props}>
      {isLoading ? (
        <CircularProgress size={sizeLoading[size]} color="inherit" />
      ) : (
        children
      )}
    </Button>
  );
}

export default ButtonLoading;
