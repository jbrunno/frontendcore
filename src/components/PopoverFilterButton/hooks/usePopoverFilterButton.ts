import { MouseEvent, useState } from 'react';

type UsePopoverFilterButtonProps = {
  setOpen: (open: boolean) => void;
};

export function usePopoverFilterButton({
  setOpen,
}: UsePopoverFilterButtonProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return {
    data: { anchorEl },
    actions: { handleClose, handleClick },
  };
}
