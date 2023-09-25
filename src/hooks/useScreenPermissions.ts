import { useSelector } from '@xstate/react';
import { useGlobalServices } from './useGlobalServices';

export function useScreenPermissions(screen: string) {
  const { screensService } = useGlobalServices();

  const screenData =
    useSelector(screensService, (state) => state.context[screen]?.data) || {};

  const screenPermissions =
    useSelector(
      screensService,
      (state) => state.context[screen]?.permissions,
    ) || [];

  const hasPermission = (permission: string) =>
    screenPermissions?.includes(permission);

  const hasPermissions = (...permissions: string[]) =>
    permissions.every((permission) => screenPermissions?.includes(permission));

  return {
    hasPermission,
    hasPermissions,
    screenPermissions,
    screenData,
  };
}
