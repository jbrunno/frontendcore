import { styled, css } from '@mui/material/styles';
import { CardContent } from '@mui/material';
import Card from '../Card/Card';

export const CardStyled = styled(Card)`
  display: grid;
  min-height: ${({ theme }) => theme.fn.spacing(180)};
  height: 100%;
`;

export const CardContentStyled = styled(CardContent)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: 1fr;
    gap: ${theme.fn.spacing(8)};
    height: 100%;
  `,
);
