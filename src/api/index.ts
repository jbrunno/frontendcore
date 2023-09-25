import { AuthPayload } from '@/types';
import {
  ApolloClient,
  ApolloLink,
  InMemoryCacheConfig,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { cache } from './cache';
import { createErrorLink } from './error/errorLink';
import { createAuthLink, httpLink, refreshTokenLink } from './http/httpLinks';
import { createWSLink } from './ws/wsLink';

export type ApiClient = {
  bffURL: string;
  bffWsURL: string;
  cacheConfig: InMemoryCacheConfig;
  refreshURL: string;
  authToken?: string;
  logout: () => void;
  refreshAuth: (refresh: AuthPayload) => void;
};

export const client = ({
  bffURL,
  bffWsURL,
  cacheConfig,
  refreshURL,
  authToken,
  logout,
  refreshAuth,
}: ApiClient) => {
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    createWSLink(bffWsURL, authToken),
    createAuthLink(authToken)
      .concat(refreshTokenLink(refreshURL, logout, refreshAuth, authToken))
      .concat(httpLink(bffURL)),
  );

  return new ApolloClient({
    cache: cache(cacheConfig),
    link: ApolloLink.from([createErrorLink(), splitLink]),
  });
};
