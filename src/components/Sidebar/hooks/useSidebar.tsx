import { useGlobalServices, useLogout } from '@/hooks';
import { useSelector } from '@xstate/react';
import { useState } from 'react';

export function useSidebar() {
  const [isExpanded, setAsExpanded] = useState(false);

  const handleExpanded = (expanded: boolean) => {
    setAsExpanded(expanded);
  };

  const [logout] = useLogout();
  const { accountService } = useGlobalServices();
  const loggedUser =
    useSelector(accountService, ({ context }) => context.nome) || 'None';

  return {
    loggedUser,
    isExpanded,
    logout,
    handleExpanded,
  };
}
