import { css, styled } from '@mui/material/styles';

export const ToastContainerWrapperStyled = styled('div')(
  ({ theme }) => css`
    .Toastify__toast-container {
      width: fit-content;
    }
    .Toastify__toast-body {
      padding-right: ${theme.fn.spacing(8)};
    }
    .Toastify__toast--default {
      background: ${theme.palette.grey[600]};
      color: ${theme.palette.common.white};
    }
    .Toastify__toast--info {
      background: ${theme.palette.info.main};
      color: ${theme.palette.common.white};
    }
    .Toastify__toast--success {
      background: ${theme.palette.success.main};
      color: ${theme.palette.common.white};
    }
    .Toastify__toast--warning {
      background: ${theme.palette.warning.main};
      color: ${theme.palette.common.white};
    }
    .Toastify__toast--error {
      background: ${theme.palette.error.main};
      color: ${theme.palette.common.white};
    }
    .Toastify__progress-bar {
      background: ${theme.palette.common.white}9;
    }
  `,
);
