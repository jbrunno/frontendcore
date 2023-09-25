import { css, styled } from '@mui/material';
import { Typography } from '../Typography/Typography';

export const HeaderStyled = styled('div')(
  ({ theme }) => css`
    display: grid;
    margin-top: ${theme.fn.spacing(16)};
    row-gap: ${theme.fn.spacing(4)};
    align-items: center;
    grid-auto-rows: min-content;
    grid-auto-flow: row;
  `,
);

export const IconBoxStyled = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    border-right: 2px solid #d8d8d8;
    padding-right: ${theme.fn.spacing(4)};
    margin-right: ${theme.fn.spacing(16)};
    height: 20px;
  `,
);

export const InfoBoxStyled = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.palette.text.primary};
    margin-left: ${theme.fn.spacing(12)};
  `,
);

export const TypographyStyled = styled(Typography)`
  display: flex;
  align-items: center;
`;
