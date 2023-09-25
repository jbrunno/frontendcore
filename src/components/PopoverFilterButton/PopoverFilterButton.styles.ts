import { css, styled } from '@mui/material/styles';
import Popover from '../Popover/Popover';

export const PopoverContentStyled = styled('div')(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.fn.spacing(16)};
    padding: ${theme.fn.spacing(16)};
  `,
);

export const PopoverStyled = styled(Popover, {
  shouldForwardProp: (prop) =>
    !['marginTop', 'marginBottom', 'marginLeft', 'marginRight'].includes(
      prop.toString(),
    ),
})<{
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}>(
  ({ theme, marginTop, marginBottom, marginLeft, marginRight }) => css`
    .MuiPaper-root {
      margin-top: ${theme.fn.spacing(marginTop || 0)};
      margin-bottom: ${theme.fn.spacing(marginBottom || 0)};
      margin-left: ${theme.fn.spacing(marginLeft || 0)};
      margin-right: ${theme.fn.spacing(marginRight || 0)};
    }
  `,
);
