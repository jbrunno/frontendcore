import { client } from '@/api';
import { useGlobalServices } from '@/hooks/useGlobalServices';
import { useSelector } from '@xstate/react';
import { useAuth } from './useAuth';

export type UseAPiClientProps = {
  token?: string;
  bffURL?: string;
  bffWsURL?: string;
};

export const useApiClient = (props?: UseAPiClientProps) => {
  const { logout, refreshAuth } = useAuth();
  const { authService, cacheService, configService, stateService } =
    useGlobalServices();
  const { BFF_GRAPHQL_URL, BFF_GRAPHQL_WS_URL } = useSelector(
    configService,
    ({ context }) => context,
  );
  const cache = useSelector(cacheService, ({ context }) => context || {});
  const { authToken } = useSelector(authService, ({ context }) => context);

  const refreshURL = useSelector(
    stateService,
    ({ context }) => context.data?.loginURL as string,
  );

  return client({
    bffURL: props?.bffURL || (BFF_GRAPHQL_URL as string),
    bffWsURL: props?.bffWsURL || (BFF_GRAPHQL_WS_URL as string),
    cacheConfig: cache,
    refreshURL,
    authToken: props?.token || authToken,
    logout,
    refreshAuth,
  });
};
