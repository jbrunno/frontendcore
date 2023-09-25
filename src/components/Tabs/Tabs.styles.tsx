import { css, styled } from '@mui/material/styles';
import Card from '../Card/Card';

export const CardStyled = styled(Card)`
  ${({ theme }) => css`
    border-radius: ${theme.fn.size(0)};
    border-bottom: ${theme.fn.size(1)} ${theme.palette.divider} solid;
  `}
`;
