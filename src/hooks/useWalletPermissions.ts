import { useSelector } from '@xstate/react';
import { useGlobalServices } from './useGlobalServices';

export function useWalletPermissions(screen: string) {
  const { walletsService } = useGlobalServices();

  const walletData =
    useSelector(walletsService, (state) => state.context[screen]?.data) || {};

  const walletPermissions =
    useSelector(
      walletsService,
      (state) => state.context[screen]?.permissions,
    ) || [];

  const hasPermission = (permission: string) =>
    walletPermissions?.includes(permission);

  const hasPermissions = (...permissions: string[]) =>
    permissions.every((permission) => walletPermissions?.includes(permission));

  return {
    hasPermission,
    hasPermissions,
    walletPermissions,
    walletData,
  };
}
