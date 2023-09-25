import React from 'react';
import {
  TreeView as MuiTreeView,
  TreeViewProps as MuiTreeViewProps,
} from '@mui/lab';

export type TreeViewProps = MuiTreeViewProps;

export function TreeView(props: TreeViewProps) {
  return <MuiTreeView {...props} />;
}

export default TreeView;
