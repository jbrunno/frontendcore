import type { ComponentMeta, ComponentStory } from '@storybook/react';
import TreeItem from '../TreeItem';
import TreeView from '../../TreeView/TreeView';
import { Typography } from '../../Typography/Typography';

export default {
  id: 'treeitem',
  title: 'Lab/TreeItem',
  component: TreeItem,
  argTypes: {
    label: {
      type: 'string',
    },
    nodeId: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof TreeItem>;

export const Default = (props: ComponentStory<typeof TreeItem>) => {
  return (
    <TreeView
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="5" label="Documents" {...props}>
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
          <Typography>TreeItem</Typography>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};
