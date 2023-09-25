import React from 'react';
import {
  TabPanel as TabPanelMui,
  TabPanelProps as MuiTabPanelProps,
} from '@mui/lab';

export type TabPanelProps = MuiTabPanelProps;

export function TabPanel(props: TabPanelProps) {
  return <TabPanelMui {...props} />;
}

export default TabPanel;
