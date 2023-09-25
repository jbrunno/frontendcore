import { AuthPayload } from '@/types';
import { useGlobalServices } from './useGlobalServices';

export const useAuth = () => {
  const {
    authService,
    accountService,
    screensService,
    configService,
    stateService,
    cacheService,
    walletsService,
  } = useGlobalServices();

  const logout = () => {
    authService.send('LOG_OUT');
    accountService.send('REMOVE_ACCOUNT');
    screensService.send('REMOVE_SCREENS_DATA');
    configService.send('REMOVE_CONFIG');
    stateService.send('REMOVE_STATE');
    cacheService.send('REMOVE_CACHE');
    walletsService.send('REMOVE_WALLETS_CONTEXT');
  };

  const refreshAuth = (refresh: AuthPayload) => {
    const { token, usuario, resources, walletPerms } = refresh;
    const screens = Object.fromEntries(
      resources.map((resource) => [resource, { permissions: [] }]),
    );

    const walletContext = Object.fromEntries(
      Object.entries(walletPerms).map(([resource, permissions]) => [
        resource,
        { permissions },
      ]),
    );

    authService.send({ type: 'REFRESH_TOKEN', auth: { authToken: token } });
    accountService.send({ type: 'UPDATE_ACCOUNT', account: usuario });
    screensService.send({ type: 'UPDATE_SCREENS_DATA', screens });
    walletsService.send({
      type: 'UPDATE_WALLETS_CONTEXT',
      context: walletContext,
    });
  };

  return {
    logout,
    refreshAuth,
  };
};
