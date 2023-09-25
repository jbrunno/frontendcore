import React from 'react';
import {
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
} from '@mui/material';

export type AlertTitleProps = MuiAlertTitleProps;

export function AlertTitle(props: AlertTitleProps) {
  return <MuiAlertTitle {...props} />;
}

export default AlertTitle;
