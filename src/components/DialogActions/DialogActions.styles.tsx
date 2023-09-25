import { css, styled } from '@mui/material/styles';
import DialogActions from './DialogActions';

export const DialogActionsStyled = styled(DialogActions)(
  ({ theme }) => css`
    padding: ${theme.fn.spacing(16)};
    justify-content: flex-end;
    border-top: 1px solid ${theme.palette.divider};
  `,
);
