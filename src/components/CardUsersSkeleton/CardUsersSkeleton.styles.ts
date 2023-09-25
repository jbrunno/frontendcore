import { styled, css } from '@mui/material/styles';
import Card from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton';

export const CardStyled = styled(Card)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: ${theme.fn.spacing(16)};
    padding: ${theme.fn.spacing(16)};
  `,
);

export const SkeletonStyled = styled(Skeleton)`
  border-radius: 8px;
`;
