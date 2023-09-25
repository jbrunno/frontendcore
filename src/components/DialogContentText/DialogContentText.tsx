import React from 'react';
import {
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material';

export type DialogContentTextProps = MuiDialogContentTextProps;

export function DialogContentText(props: DialogContentTextProps) {
  return <MuiDialogContentText {...props} />;
}

export default DialogContentText;
