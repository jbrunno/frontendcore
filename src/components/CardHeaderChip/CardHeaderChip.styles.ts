import { styled, css } from '@mui/material/styles';
import CardHeader from '../CardHeader/CardHeader';

export const CardTitleContainerStyled = styled('div')`
  display: grid;
  column-gap: ${({ theme }) => theme.spacing(0.5)};
  white-space: nowrap;
  grid-template-columns: auto 1fr;
  align-items: baseline;
`;

export const CardTitleIconContentStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const CardHeaderStyled = styled(CardHeader, {
  shouldForwardProp: (prop) =>
    !['hasDivider', 'chipWithTitle'].includes(prop.toString()),
})<{
  hasDivider: boolean;
  chipWithTitle: boolean;
}>`
  display: grid;
  ${({ chipWithTitle }) =>
    chipWithTitle
      ? css`
          grid-template-columns: auto auto 1fr;
        `
      : css`
          grid-template-columns: 1fr auto auto;
        `}
  grid-template-areas: 'content avatar action';

  ${({ hasDivider, theme }) =>
    hasDivider
      ? css`
          border-bottom: 1px solid ${theme.palette.divider};
        `
      : ''};

  .MuiCardHeader-content {
    grid-area: content;
  }

  .MuiCardHeader-avatar {
    margin-right: 0;
    margin-left: ${({ theme }) => theme.spacing(1)};
    grid-area: avatar;
  }

  .MuiCardHeader-avatar > div {
    display: flex;
  }

  .MuiCardHeader-action {
    grid-area: action;
    margin: auto;
  }
`;
