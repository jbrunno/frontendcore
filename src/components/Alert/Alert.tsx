import React from 'react';
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material';

export type AlertProps = MuiAlertProps;

export function Alert(props: AlertProps) {
  return <MuiAlert {...props} />;
}

export default Alert;
