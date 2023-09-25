import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import TreeView from '../TreeView';
import TreeItem from '../../TreeItem/TreeItem';
import { Typography } from '../../Typography/Typography';

export default {
  id: 'treeview',
  title: 'Lab/TreeView',
  component: TreeView,
} as ComponentMeta<typeof TreeView>;

export const Default = (props: ComponentStory<typeof TreeView>) => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      {...props}
    >
      <Typography>TreeView</Typography>
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};
