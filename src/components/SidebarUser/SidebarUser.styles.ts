import { styled, css } from '@mui/material/styles';
import Avatar from '../Avatar/Avatar';
import Link from '../Link/Link';

export const AvatarStyled = styled(Avatar)`
  grid-row: span 2;
`;

export const SidebarUserContentStyled = styled('div', {
  shouldForwardProp: (prop) => !['isExpanded'].includes(prop.toString()),
})<{
  isExpanded: boolean;
}>(
  ({ theme, isExpanded }) => css`
    display: grid;
    grid-template-columns: ${isExpanded ? 'auto 1fr' : 'auto'};
    align-items: center;
    column-gap: ${theme.fn.spacing(8)};
    padding: ${theme.fn.spacing(0, 8)};
  `,
);

export const LinkStyled = styled(Link)`
  display: flex;
  width: min-content;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &:active {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
