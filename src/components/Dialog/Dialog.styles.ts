import { css, styled } from '@mui/material/styles';

export const TitleContainer = styled('div')(
  ({ theme }) => css`
    display: grid;
    column-gap: ${theme.fn.spacing(16)};
    white-space: nowrap;
    grid-template-columns: auto 1fr;
  `,
);

export const DialogTitleContainer = styled('div')(
  ({ theme }) => css`
    display: grid;
    padding: ${theme.fn.spacing(0, 0, 0, 16)};
    align-items: center;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${theme.palette.divider};
  `,
);
