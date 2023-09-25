import React, { ReactNode } from 'react';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import {
  BoxEquipeStyled,
  BoxEquipeContainerStyled,
  CardStyled,
  GridIconStyled,
  GridStyled,
  PeopleAltIconStyled,
  PersonIconStyled,
  StarIconStyled,
} from './CardUsers.styles';
import { Typography } from '../Typography/Typography';
import Tooltip from '../Tooltip/Tooltip';
import IconButton from '../IconButton/IconButton';
import Menu from '../Menu/Menu';
import { useCardUsers } from './hooks/useCardUsers';
import Grid from '../Grid/Grid';

export enum PermissionamentoCargosEnum {
  GerenteOperacional = 'Gerente Operacional',
  Supervisor = 'Supervisor',
  Operador = 'Operador',
}

export type CardUsersData = {
  node: {
    id: string;
    nome: string;
    cargo: string;
    equipes: Array<string>;
  };
};

type CardUsersProps = {
  className?: string;
  tooltipTitle?: string;
  menuItems?: ReactNode;
  users: CardUsersData;
};

export function CardUsers({
  className,
  tooltipTitle = 'Opções',
  menuItems,
  users: {
    node: { nome, cargo, equipes },
  },
}: CardUsersProps) {
  const {
    data: { menuOpen, anchorEl },
    actions: { handleMenuOpen, handleClose },
  } = useCardUsers();

  return (
    <CardStyled className={className} elevation={4}>
      <GridStyled
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <GridIconStyled
          container
          alignItems="center"
          justifyContent="center"
          cargo={cargo}
        >
          {cargo === PermissionamentoCargosEnum.GerenteOperacional ? (
            <StarIconStyled />
          ) : (
            <PersonIconStyled />
          )}
        </GridIconStyled>
        <Grid item xs={9}>
          <Typography variant="subtitle1" color="textPrimary">
            {nome}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {cargo}
          </Typography>
        </Grid>
        <Grid item xs={1} container alignItems="center" justifyContent="center">
          <Tooltip title={tooltipTitle} arrow>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </GridStyled>
      {cargo === PermissionamentoCargosEnum.Supervisor && (
        <BoxEquipeContainerStyled>
          {equipes.map((equipe) => (
            <BoxEquipeStyled key={equipe}>
              <PeopleAltIconStyled fontSize="small" />
              <Typography color="textSecondary" variant="caption">
                {equipe}
              </Typography>
            </BoxEquipeStyled>
          ))}
        </BoxEquipeContainerStyled>
      )}
      {menuItems && (
        <Menu open={menuOpen} onClose={handleClose} anchorEl={anchorEl}>
          {menuItems}
        </Menu>
      )}
    </CardStyled>
  );
}

export default CardUsers;
