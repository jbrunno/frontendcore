import { css, styled } from '@mui/material/styles';
import ListItemButton from '../ListItemButton/ListItemButton';
import ListItemIcon from '../ListItemIcon/ListItemIcon';
import Typography from '../Typography/Typography';

export const ListItemIconStyled = styled(ListItemIcon)`
  width: min-content;
  min-width: min-content;
`;

export const ListItemLabelStyled = styled(Typography)``;

export const ListItemStyled = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    !['isExpanded', 'isActive'].includes(prop.toString()),
})<{
  isExpanded: boolean;
  isActive: boolean;
}>(
  ({ theme, isExpanded, isActive }) => css`
    display: grid;
    grid-template-columns: ${isExpanded ? 'auto 1fr' : 'auto'};
    column-gap: ${theme.fn.spacing(8)};
    border-radius: 4px;
    background-color: ${isActive && isExpanded && theme.palette.primary[500]}08;
    overflow: hidden;

    ${ListItemIconStyled} {
      color: ${isActive && theme.palette.primary.main};
    }

    ${ListItemLabelStyled} {
      color: ${isActive && theme.palette.primary.main};
    }

    &:hover {
      background-color: ${theme.palette.primary[500]}08;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 1;
      top: 0;
      left: 0;
      transform: scaleX(0) scaleY(50%);
      border-radius: 50%;
      background: radial-gradient(
        circle at center,
        ${theme.palette.primary[500]}12 25%,
        ${theme.palette.primary[500]}12 100%
      );
    }

    &:focus {
      &::after {
        transform: scaleX(110%) scaleY(300%);
        opacity: 0;
        transition: 0.4s ease-out, opacity 0.3s ease 0.4s;
      }
    }

    &.Mui-disabled {
      opacity: 1;
    }
  `,
);
