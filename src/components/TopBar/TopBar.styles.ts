import { css, styled } from '@mui/material/styles';
import AppBar from '../AppBar/AppBar';
import Card from '../Card/Card';
import Menu from '../Menu/Menu';

export const AppBarStyled = styled(AppBar)(
  ({ theme }) => css`
    border-radius: 0 0 ${theme.fn.size(16)} ${theme.fn.size(16)};
    background-color: ${theme.palette.common.white};
  `,
);

export const MenuStyled = styled(Menu)`
  left: ${({ theme }) => theme.fn.spacing(-105)};
`;

export const DialogCardStyled = styled(Card)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.fn.spacing(20)};
    padding: ${theme.fn.spacing(22, 32, 32, 32)};
    width: ${theme.fn.size(350)};
  `,
);
