import React, { ReactNode } from 'react';
import {
  SidebarMenuItem,
  SidebarMenuItemType,
} from '../SidebarMenuItem/SidebarMenuItem';
import { SidebarList } from './SidebarMenu.styles';

export type SidebarMenuProps = {
  isExpanded?: boolean;
  items?: SidebarMenuItemType[];
  children?:
    | ((props: Omit<SidebarMenuProps, 'children'>) => ReactNode)
    | ReactNode;
};

export function SidebarMenu({
  isExpanded = false,
  items,
  children,
}: SidebarMenuProps) {
  const renderChildren =
    typeof children === 'function' ? children({ isExpanded, items }) : children;

  return (
    <SidebarList>
      {!children && items
        ? items.map((item) => (
            <SidebarMenuItem
              key={item.label}
              item={item}
              isExpanded={isExpanded}
            />
          ))
        : renderChildren}
    </SidebarList>
  );
}

export default SidebarMenu;
