import React from 'react';
import {
  TreeItem as MuiTreeItem,
  TreeItemProps as MuiTreeItemProps,
} from '@mui/lab';

export type TreeItemProps = MuiTreeItemProps;

export function TreeItem(props: TreeItemProps) {
  return <MuiTreeItem {...props} />;
}

export default TreeItem;
