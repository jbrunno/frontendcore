import { styled, css } from '@mui/material/styles';
import {
  PeopleAlt as PeopleAltIcon,
  Star as StarIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { StyledComponent } from '@emotion/styled';
import Card from '../Card/Card';
import { Grid, GridProps } from '../Grid/Grid';
import { PermissionamentoCargosEnum } from './CardUsers';

export const CardStyled = styled(Card)(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.fn.spacing(396)};
    margin-right: ${theme.fn.spacing(16)};
    margin-bottom: ${theme.fn.spacing(16)};
  `,
);

export const GridStyled: StyledComponent<GridProps> = styled(Grid)`
  padding: ${({ theme }) => theme.fn.spacing(16, 8, 16, 16)};
`;

export const GridIconStyled: StyledComponent<GridProps & { cargo?: string }> =
  styled(Grid)<{
    cargo?: string;
  }>(
    ({ theme, cargo }) => css`
      width: ${theme.fn.spacing(48)};
      height: ${theme.fn.spacing(48)};
      background-color: ${cargo ===
      PermissionamentoCargosEnum.GerenteOperacional
        ? theme.palette.primary[50]
        : theme.palette.secondary[50]};
      border-radius: ${theme.fn.spacing(8)};
    `,
  );

export const StarIconStyled = styled(StarIcon)`
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const PersonIconStyled = styled(PersonIcon)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const BoxEquipeStyled = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: center;
  width: fit-content;
`;

export const PeopleAltIconStyled = styled(PeopleAltIcon)(
  ({ theme }) => css`
    color: ${theme.palette.text.secondary};
    margin-right: ${theme.fn.spacing(8)};
  `,
);

export const BoxEquipeContainerStyled = styled('div')(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: auto;
    column-gap: ${theme.fn.spacing(16)};
    grid-column: 1 / 3;
    margin: ${theme.fn.spacing(0, 16, 8)};
  `,
);
