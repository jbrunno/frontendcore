import React from 'react';
import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from '@mui/material';

export type DialogContentProps = MuiDialogContentProps;

export function DialogContent(props: DialogContentProps) {
  return <MuiDialogContent {...props} />;
}

export default DialogContent;
