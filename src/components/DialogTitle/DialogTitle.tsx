import React from 'react';
import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';

export type DialogTitleProps = MuiDialogTitleProps;

export function DialogTitle(props: DialogTitleProps) {
  return <MuiDialogTitle {...props} />;
}

export default DialogTitle;
