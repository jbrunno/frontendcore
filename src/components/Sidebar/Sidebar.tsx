import { ReactNode } from 'react';
import { SidebarUser } from '../SidebarUser/SidebarUser';
import { DrawerProps } from '../Drawer/Drawer';
import { SidebarLogo } from '../SidebarLogo/SidebarLogo';
import { useSidebar } from './hooks/useSidebar';
import { SidebarDrawerStyled } from './Sidebar.styles';

type ChildrenProps = {
  isExpanded: boolean;
  handleExpanded: (expanded: boolean) => void;
};

type SidebarProps = {
  children?: ((props: ChildrenProps) => ReactNode) | ReactNode;
} & Omit<DrawerProps, 'children'>;

export const SIDEBAR_WIDTH = 72;
export const EXPANDED_SIDEBAR_WIDTH = 240;

export function Sidebar({ children, ...props }: SidebarProps) {
  const { isExpanded, loggedUser, logout, handleExpanded } = useSidebar();
  return (
    <SidebarDrawerStyled
      variant="permanent"
      anchor="left"
      onMouseEnter={() => handleExpanded(true)}
      onMouseLeave={() => handleExpanded(false)}
      sidebarWidth={SIDEBAR_WIDTH}
      expandedSidebarWidth={EXPANDED_SIDEBAR_WIDTH}
      isExpanded={isExpanded}
      {...props}
    >
      <SidebarLogo isExpanded={isExpanded} />
      {typeof children === 'function'
        ? children({ isExpanded, handleExpanded })
        : children}
      <SidebarUser
        isExpanded={isExpanded}
        handleLogOut={() => logout()}
        user={{ name: loggedUser }}
      />
    </SidebarDrawerStyled>
  );
}

export default Sidebar;
