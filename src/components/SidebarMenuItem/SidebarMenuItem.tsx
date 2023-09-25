import React, { ReactNode } from 'react';
import {
  ListItemIconStyled,
  ListItemLabelStyled,
  ListItemStyled,
} from './SidebarMenuItem.styles';

export type SidebarMenuItemType = {
  label: string;
  icon: ReactNode;
  handle: () => void;
  match: boolean;
};

export type SidebarMenuItemProps = {
  item: SidebarMenuItemType;
  isExpanded?: boolean;
};

export function SidebarMenuItem({
  item,
  isExpanded = false,
}: SidebarMenuItemProps) {
  return (
    <ListItemStyled
      onClick={() => item.handle()}
      isActive={item.match}
      disabled={item.match}
      isExpanded={isExpanded}
      disableRipple
    >
      <ListItemIconStyled>{item.icon}</ListItemIconStyled>
      {isExpanded && (
        <ListItemLabelStyled variant="body1" color="textSecondary">
          {item.label}
        </ListItemLabelStyled>
      )}
    </ListItemStyled>
  );
}

export default SidebarMenuItem;
