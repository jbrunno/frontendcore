import {
  CarteiraUserAccount,
  Children,
  ContextoUserAccount,
  ObjectLiteral,
} from '@/types';
import { MoreVert } from '@mui/icons-material';
import { AutocompleteRenderInputParams } from '@mui/material';
import Autocomplete from '../Autocomplete/Autocomplete';
import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import { Grid } from '../Grid/Grid';
import IconButton from '../IconButton/IconButton';
import MenuItem from '../MenuItem/MenuItem';
import { SearchField, SearchFieldProps } from '../SearchField/SearchField';
import TextField from '../TextField/TextField';
import { Typography } from '../Typography/Typography';
import { useTopBar } from './hooks/useTopBar';
import { AppBarStyled, DialogCardStyled, MenuStyled } from './TopBar.styles';
import { AreaNomeEnum } from '../../types/data';
import Tooltip from '../Tooltip/Tooltip';

export type TopBarProps = {
  children?: Children;
};

export function TopBar({ children, ...props }: TopBarProps & SearchFieldProps) {
  const {
    anchorEl,
    openMenu,
    openAreasDialog,
    openCarteirasDialog,
    areas,
    carteiras,
    currentArea,
    currentCarteira,
    selectArea,
    selectCarteira,
    handleAreaChange,
    handleCarteiraChange,
    toggleMenuOpen,
    toggleAreasDialog,
    toggleCarteirasDialog,
  } = useTopBar();

  return (
    <AppBarStyled elevation={0} position="sticky" color="default">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        paddingY={2}
        paddingX={4}
      >
        <Grid item xs={5}>
          <SearchField
            size="small"
            placeholder="Buscar por CPF, título ou nome"
            fullWidth
            {...props}
          />
        </Grid>
        {children || (
          <Grid
            item
            xs={4}
            container
            alignItems="center"
            justifyContent="right"
          >
            {currentArea && (
              <Typography variant="body1" color="textSecondary">
                {AreaNomeEnum[currentArea.nome as keyof typeof AreaNomeEnum]}
              </Typography>
            )}
            {currentCarteira && (
              <Typography variant="body1" color="textSecondary">
                &nbsp;-&nbsp;
              </Typography>
            )}
            {currentCarteira && (
              <Typography variant="subtitle1" color="textPrimary">
                {currentCarteira.nome}
              </Typography>
            )}
            {(areas || carteiras) && (
              <Tooltip title="Em desenvolvimento">
                <IconButton color="inherit" onClick={toggleMenuOpen}>
                  <MoreVert fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        )}
      </Grid>
      <MenuStyled
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openMenu}
        onClose={toggleMenuOpen}
      >
        <MenuItem onClick={toggleAreasDialog}>Alterar área</MenuItem>
        <MenuItem onClick={toggleCarteirasDialog}>Alterar carteira</MenuItem>
      </MenuStyled>
      <Dialog open={openAreasDialog} onClose={toggleAreasDialog}>
        <DialogCardStyled>
          <Typography mb={1} variant="h3" color="grey.800">
            Alterar área de atuação
          </Typography>
          <Autocomplete
            fullWidth
            size="small"
            defaultValue={currentArea}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <TextField
                {...params}
                variant="outlined"
                label="Selecione a área de atuação"
              />
            )}
            getOptionLabel={(option) =>
              AreaNomeEnum[
                (option as ObjectLiteral<string, string>)
                  .nome as keyof typeof AreaNomeEnum
              ]
            }
            onChange={(_, value) => selectArea(value as ContextoUserAccount)}
            options={areas || []}
          />
          <Button fullWidth variant="contained" onClick={handleAreaChange}>
            Alterar
          </Button>
        </DialogCardStyled>
      </Dialog>
      <Dialog open={openCarteirasDialog} onClose={toggleCarteirasDialog}>
        <DialogCardStyled>
          <Typography mb={1} variant="h3" color="grey.800">
            Alterar carteira
          </Typography>
          <Autocomplete
            fullWidth
            size="small"
            defaultValue={currentCarteira}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <TextField
                {...params}
                variant="outlined"
                label="Selecione a carteira"
              />
            )}
            getOptionLabel={(option) =>
              (option as ObjectLiteral<string, string>).nome
            }
            onChange={(_, value) =>
              selectCarteira(value as CarteiraUserAccount)
            }
            options={carteiras || []}
          />
          <Button fullWidth variant="contained" onClick={handleCarteiraChange}>
            Alterar
          </Button>
        </DialogCardStyled>
      </Dialog>
    </AppBarStyled>
  );
}

export default TopBar;
