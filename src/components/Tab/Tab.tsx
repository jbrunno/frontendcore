import React from 'react';
import { TabProps as MuiTabProps } from '@mui/material';
import { TabStyled, TabStyledProps } from './Tab.styles';

export type TabProps = MuiTabProps & TabStyledProps;

export function Tab(props: TabProps) {
  return <TabStyled {...props} />;
}

export default Tab;
