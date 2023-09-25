import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

export function useCardTeam() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = useCallback((event: Event | MouseEvent) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget as HTMLElement);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setMenuOpen(false);
  }, []);

  const prevOpen = useRef(menuOpen);
  useEffect(() => {
    if (prevOpen.current === true && menuOpen === false) {
      anchorEl?.focus();
    }

    prevOpen.current = menuOpen;
  }, [menuOpen]);

  return {
    data: {
      menuOpen,
      anchorEl,
    },
    actions: {
      handleMenuOpen,
      handleClose,
    },
  };
}
