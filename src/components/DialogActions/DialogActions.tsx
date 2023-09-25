import React from 'react';
import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';

export type DialogActionsProps = MuiDialogActionsProps;

export function DialogActions(props: DialogActionsProps) {
  return <MuiDialogActions {...props} />;
}

export default DialogActions;
