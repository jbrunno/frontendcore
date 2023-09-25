import { css, styled } from '@mui/material/styles';

export const Logo = styled('img')(
  ({ theme }) => css`
    max-height: 100%;
    height: ${theme.fn.size(42)};

    &:nth-of-type(2) {
      margin-left: ${theme.fn.spacing(6)};
      height: ${theme.fn.size(52)};
    }
  `,
);

export const LogoContainer = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    height: ${theme.fn.size(52)};
    margin: ${theme.fn.spacing(16, 0)};
    padding: ${theme.fn.spacing(0, 6)};
  `,
);
