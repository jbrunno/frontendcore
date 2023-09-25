import React from 'react';
import { PopoverProps } from '@mui/material';
import Button from '../Button/Button';
import {
  PopoverContentStyled,
  PopoverStyled,
} from './PopoverFilterButton.styles';
import { usePopoverFilterButton } from './hooks/usePopoverFilterButton';

export type PopoverFilterButtonProps = PopoverProps & {
  text: string;
  icon?: JSX.Element;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  setOpen: (open: boolean) => void;
};

export function PopoverFilterButton({
  children,
  text,
  icon,
  color = 'primary',
  variant = 'outlined',
  size = 'large',
  setOpen,
  ...props
}: PopoverFilterButtonProps) {
  const {
    data: { anchorEl },
    actions: { handleClick, handleClose },
  } = usePopoverFilterButton({ setOpen });

  return (
    <>
      <Button
        onClick={handleClick}
        variant={variant}
        size={size}
        color={color}
        startIcon={icon}
      >
        {text}
      </Button>
      <PopoverStyled
        id="crm-popover-button"
        anchorEl={anchorEl}
        onClose={handleClose}
        {...props}
      >
        <PopoverContentStyled>{children}</PopoverContentStyled>
      </PopoverStyled>
    </>
  );
}

export default PopoverFilterButton;
