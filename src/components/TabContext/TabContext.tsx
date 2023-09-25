import React from 'react';
import {
  TabContext as TabContextMui,
  TabContextProps as MuiTabContextProps,
} from '@mui/lab';

export type TabContextProps = MuiTabContextProps;

export function TabContext(props: TabContextProps) {
  return <TabContextMui {...props} />;
}

export default TabContext;
