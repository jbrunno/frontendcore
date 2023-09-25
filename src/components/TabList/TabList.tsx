import React from 'react';
import {
  TabList as TabListMui,
  TabListProps as MuiTabListProps,
} from '@mui/lab';

export type TabListProps = MuiTabListProps;

export function TabList(props: TabListProps) {
  return <TabListMui {...props} />;
}

export default TabList;
