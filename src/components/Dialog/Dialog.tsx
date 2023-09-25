import React, { ReactNode } from 'react';
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '../Typography/Typography';
import IconButton from '../IconButton/IconButton';
import { DialogTitleContainer, TitleContainer } from './Dialog.styles';
import { DialogActionsStyled } from '../DialogActions/DialogActions.styles';

export type DialogProps = Omit<MuiDialogProps, 'onClose'> & {
  title?: string;
  titleIcon?: ReactNode;
  actions?: Array<ReactNode>;
  children: ReactNode;
  disableBackdropClick?: boolean;
  onClose: () => void;
};

export function Dialog({
  title,
  titleIcon,
  actions,
  children,
  onClose,
  disableBackdropClick,
  ...props
}: DialogProps) {
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown',
  ) => {
    if (reason === 'backdropClick' && disableBackdropClick) {
      return;
    }
    onClose();
  };

  return (
    <MuiDialog onClose={handleClose} {...props}>
      <DialogTitleContainer>
        <TitleContainer>
          <Typography variant="subtitle1">{title}</Typography>
          {titleIcon}
        </TitleContainer>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitleContainer>
      {children}
      {actions && <DialogActionsStyled>{actions}</DialogActionsStyled>}
    </MuiDialog>
  );
}

export default Dialog;
