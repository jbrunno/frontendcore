import React, { ReactNode } from 'react';
import {
  MoreVert as MoreVertIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { BoxStyled, CardStyled, IconBoxStyled } from './CardTeam.styles';
import { Typography } from '../Typography/Typography';
import Tooltip from '../Tooltip/Tooltip';
import IconButton from '../IconButton/IconButton';
import { useCardTeam } from './hooks/useCardTeam';
import Menu from '../Menu/Menu';

type CardTeamProps = {
  className?: string;
  nome: string;
  supervisor?: string;
  totalUsers: string;
  colorIcon?:
    | 'inherit'
    | 'disabled'
    | 'action'
    | 'primary'
    | 'secondary'
    | 'error';
  backgroundBox?: string;
  tooltipTitle?: string;
  menuItems?: ReactNode;
};

export function CardTeam({
  className,
  nome,
  supervisor,
  totalUsers,
  colorIcon = 'primary',
  backgroundBox,
  tooltipTitle = 'Opções',
  menuItems,
}: CardTeamProps) {
  const {
    data: { menuOpen, anchorEl },
    actions: { handleMenuOpen, handleClose },
  } = useCardTeam();

  const theme = useTheme();

  return (
    <CardStyled className={className}>
      <IconBoxStyled backgroundBox={backgroundBox || theme.palette.primary[50]}>
        <GroupIcon color={colorIcon} fontSize="large" />
      </IconBoxStyled>
      <BoxStyled>
        <Typography variant="h5">{nome}</Typography>
        <Typography color="textSecondary" variant="caption">
          {supervisor}
        </Typography>
        <Typography color="textSecondary" variant="caption">
          {totalUsers} usuários
        </Typography>
      </BoxStyled>
      <Tooltip title={tooltipTitle} arrow>
        <IconButton aria-label="settings" onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      {menuItems && (
        <Menu open={menuOpen} onClose={handleClose} anchorEl={anchorEl}>
          {menuItems}
        </Menu>
      )}
    </CardStyled>
  );
}

export default CardTeam;
