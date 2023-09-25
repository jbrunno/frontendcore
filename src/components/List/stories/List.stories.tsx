import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExpandLess, ExpandMore, Inbox, Drafts } from '@mui/icons-material';
import { ListItem } from '../../ListItem/ListItem';
import { ListItemIcon } from '../../ListItemIcon/ListItemIcon';
import { ListItemText } from '../../ListItemText/ListItemText';
import { ListItemButton } from '../../ListItemButton/ListItemButton';
import { Box } from '../../Box/Box';
import { List, ListProps } from '../List';
import { ListSubheader } from '../../ListSubheader/ListSubheader';
import { Collapse } from '../../Collapse/Collapse';

export default {
  id: 'list',
  component: List,
  title: 'Data Display/List',
} as ComponentMeta<typeof List>;

export const Default: ComponentStory<typeof List> = (props: ListProps) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <List {...props}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="List Item" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Other List Item" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export const Links: ComponentStory<typeof List> = (props: ListProps) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <List {...props}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Link Item" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Other Link Item" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export const Nested: ComponentStory<typeof List> = (props: ListProps) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      {...props}
    >
      <ListItemButton>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Drafts />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
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

export const SelectedItem: ComponentStory<typeof List> = (props: ListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <List {...props}>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
    </Box>
  );
};
