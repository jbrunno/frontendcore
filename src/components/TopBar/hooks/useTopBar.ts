import { useGlobalServices, useRefresh } from '@/hooks';
import { CarteiraUserAccount, ContextoUserAccount } from '@/types';
import { useSelector } from '@xstate/react';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router';

export const useTopBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openMenu, setMenuAsOpen] = useState(false);
  const [openAreasDialog, setAreasDialogOpen] = useState(false);
  const [openCarteirasDialog, setCarteirasDialogOpen] = useState(false);
  const [selectedArea, selectArea] = useState<ContextoUserAccount>();
  const [selectedCarteira, selectCarteira] = useState<CarteiraUserAccount>();

  const { accountService } = useGlobalServices();
  const { contexto, contextos, carteira, carteiras } = useSelector(
    accountService,
    ({ context }) => context,
  );

  const [refreshCarteira] = useRefresh();
  const [refreshContexto] = useRefresh();

  const toggleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuAsOpen((current) => !current);
  };

  const toggleAreasDialog = () => {
    setMenuAsOpen(false);
    setAreasDialogOpen((current) => !current);
  };

  const toggleCarteirasDialog = () => {
    setMenuAsOpen(false);
    setCarteirasDialogOpen((current) => !current);
  };

  const handleAreaChange = async () => {
    setAreasDialogOpen(false);
    await refreshContexto({ contextoId: selectedArea?.id });

    navigate(selectedArea?.nome.toLowerCase() as string);
  };

  const handleCarteiraChange = async () => {
    setCarteirasDialogOpen(false);
    await refreshCarteira({ carteiraId: selectedCarteira?.id });

    navigate(selectedArea?.nome.toLowerCase() as string);
  };

  return {
    areas: contextos,
    currentArea: contexto,
    carteiras,
    currentCarteira: carteira,
    anchorEl,
    openMenu,
    openAreasDialog,
    openCarteirasDialog,
    toggleMenuOpen,
    toggleAreasDialog,
    toggleCarteirasDialog,
    selectArea,
    selectCarteira,
    handleAreaChange,
    handleCarteiraChange,
  };
};
