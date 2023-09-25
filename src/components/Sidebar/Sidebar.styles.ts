import { css, styled } from '@mui/material/styles';
import Drawer from '../Drawer/Drawer';

type SidebarDrawerStyledProps = {
  isExpanded: boolean;
  sidebarWidth: number;
  expandedSidebarWidth: number;
};

export const SidebarDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => !['isExpanded'].includes(prop.toString()),
})<SidebarDrawerStyledProps>(
  ({ theme, isExpanded, sidebarWidth, expandedSidebarWidth }) => css`
    width: ${theme.fn.size(isExpanded ? expandedSidebarWidth : sidebarWidth)};

    .MuiDrawer-paper {
      width: ${theme.fn.size(isExpanded ? expandedSidebarWidth : sidebarWidth)};
      padding: ${theme.fn.spacing(16, 8)};
      transition: width 0.3s;
      background-color: ${theme.palette.common.white};
      display: grid;
      grid-template-rows: auto 1fr auto;
      row-gap: ${theme.fn.spacing(16)};
      overflow: hidden;
      border: 0;
      box-shadow: ${isExpanded
        ? '0 3px 15px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.08)'
        : '0 3px 15px rgba(0, 0, 0, 0.02), 0 3px 10px rgba(0, 0, 0, 0.02)'};
    }
  `,
);
