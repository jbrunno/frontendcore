import React, { ElementType } from 'react';
import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
} from '@mui/material';

export type ListSubheaderProps = MuiListSubheaderProps & {
  component?: ElementType;
};

export function ListSubheader(props: ListSubheaderProps) {
  return <MuiListSubheader {...props} />;
}
export default ListSubheader;
