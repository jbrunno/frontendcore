import { HttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';
import { decodeToken } from '@/utils';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { AuthPayload } from '@/types';
import { GraphQLErrors } from '@apollo/client/errors';

enum REAUTHENTICATION_ERROR {
  UNAUTHORIZED = 'PERMISSIONAMENTO_AUTENTICACAO_ERROR_UNAUTHORIZED',
  REFRESH_ERROR = 'AXIOS_ERROR',
}

export const createAuthLink = (authToken?: string) =>
  setContext((_, { headers }) => ({
    headers: {
      ...headers,
      ...(authToken ? { authorization: `Bearer ${authToken}` } : {}),
    },
  }));

export const httpLink = (uri: string) =>
  new HttpLink({
    uri,
    fetch,
  });

export const refreshTokenLink = (
  refreshURL: string,
  logout: () => void,
  refreshAuth: (refresh: AuthPayload) => void,
  authToken?: string,
): ApolloLink => {
  return new TokenRefreshLink<AuthPayload>({
    accessTokenField: 'refreshToken',
    isTokenValidOrUndefined: () => {
      if (!authToken) return true;

      const exp = (decodeToken(authToken) as { exp: number })?.exp;
      const expTimestamp = exp * 1000;
      const refreshOffsetTimestamp = 30 * 1000;
      const nowTimestamp = Date.now() + refreshOffsetTimestamp;

      return !(nowTimestamp >= expTimestamp);
    },
    fetchAccessToken: async () => {
      if (!authToken) return Promise.reject(new Error('Token not exists!'));

      return (
        await fetch(refreshURL as string, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken || ''}`,
          },
          body: JSON.stringify({
            query: `
              mutation RefreshToken($input: RefreshTokenInput!) {
                refreshToken(input: $input) {
                  token
                  resources
                  walletPerms
                  usuario {
                    id
                    nome
                    username
                    agentId
                    passCode
                    cargo
                    equipe
                    area
                    tenant
                    contexto {
                      id
                      nome
                    }
                    contextos {
                      id
                      nome
                    }
                    carteira {
                      id
                      nome
                    }
                    carteiras {
                      id
                      nome
                    }
                  }
                }
              }
            `,
            variables: {
              input: { clientMutationId: null },
            },
          }),
        })
      ).json();
    },
    handleResponse: () => (resp: { errors: GraphQLErrors }) => {
      const { errors } = resp;
      return errors ? Promise.reject(errors.at(0)) : resp;
    },
    handleFetch: (refreshToken) => {
      refreshAuth(refreshToken);
    },
    handleError: (error: any) => {
      if (!error.extensions) return;
      if (
        error.extensions.code === REAUTHENTICATION_ERROR.UNAUTHORIZED ||
        error.extensions.code === REAUTHENTICATION_ERROR.REFRESH_ERROR
      ) {
        /* eslint-disable no-console */
        console.groupCollapsed('[GraphQL Errors]');
        console.error('Not authorized to refresh token');
        console.groupEnd();

        fetch(refreshURL as string, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken || ''}`,
          },
          body: JSON.stringify({
            query: `
                mutation Logout($input: LogoutInput!) {
                  logout(input: $input) {
                    usuario {
                      id
                    }
                  }
                }
              `,
            variables: {
              input: {
                clientMutationId: null,
              },
            },
          }),
        })
          .then(() => {
            logout();
          })
          .catch((e) => {
            console.groupCollapsed('[GraphQL Errors]');
            console.error(e);
            console.groupEnd();
          });
        /* eslint-enable no-console */
      }
    },
  });
};
