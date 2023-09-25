import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExpandLess, ExpandMore, Inbox, Drafts } from '@mui/icons-material';
import { Collapse, CollapseProps } from '../Collapse';
import { List } from '../../List/List';
import { ListItemButton } from '../../ListItemButton/ListItemButton';
import { ListItemIcon } from '../../ListItemIcon/ListItemIcon';
import { ListItemText } from '../../ListItemText/ListItemText';

export default {
  id: 'Collapse',
  title: 'Component API/Collapse',
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

export const Default: ComponentStory<typeof Collapse> = (
  props: CollapseProps,
) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary="Click me to expand/collapse" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit {...props}>
        <List disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
