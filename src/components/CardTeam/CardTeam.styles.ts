import { css, styled } from '@mui/material/styles';
import Box from '../Box/Box';
import Card from '../Card/Card';

export const CardStyled = styled(Card)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: ${theme.fn.spacing(16)};
    padding: ${theme.fn.spacing(16)};
  `,
);

type IconBoxProps = {
  backgroundBox?: string;
};

export const IconBoxStyled = styled('div')<IconBoxProps>(
  ({ theme, backgroundBox }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.fn.spacing(8)};
    background: ${backgroundBox};
  `,
);

export const BoxStyled = styled(Box)`
  display: grid;
  grid-template-rows: auto auto auto;
`;
