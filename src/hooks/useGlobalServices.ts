import { getGlobalServicesContext } from '@/contexts';
import { useContext } from 'react';

export const useGlobalServices = () => {
  const {
    accountService,
    authService,
    cacheService,
    configService,
    screensService,
    stateService,
    themeService,
    walletsService,
  } = useContext(getGlobalServicesContext());

  return {
    accountService,
    authService,
    cacheService,
    configService,
    screensService,
    stateService,
    themeService,
    walletsService,
  };
};
