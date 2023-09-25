import React from 'react';
import {
  Collapse as MuiCollapse,
  CollapseProps as MuiCollapseProps,
} from '@mui/material';

export type CollapseProps = MuiCollapseProps;

export function Collapse(props: CollapseProps) {
  return <MuiCollapse {...props} />;
}
export default Collapse;
