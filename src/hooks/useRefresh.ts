import { AuthPayload } from '@/types';
import { promiseHandler } from '@/utils';
import { ApolloError, FetchResult, gql } from '@apollo/client';
import { useSelector } from '@xstate/react';
import { useGlobalServices } from './useGlobalServices';
import useObjectState from './useObjectState';
import { useApiClient } from './useApiClient';
import { useAuth } from './useAuth';

export const useRefresh = (): [
  (
    input: RefreshInput,
  ) => Promise<
    FetchResult<RefreshData, Record<string, any>> | null | undefined
  >,
  {
    data: RefreshData | null;
    error?: ApolloError | undefined;
  },
] => {
  const { refreshAuth } = useAuth();
  const { stateService } = useGlobalServices();
  const loginURL = useSelector(
    stateService,
    ({ context }) => context.data?.loginURL as string,
  );
  const client = useApiClient({ bffURL: loginURL });
  const [state, setState] = useObjectState<{
    data: RefreshData | null;
    error?: ApolloError;
  }>({ data: null, error: undefined });

  const fetch = async (input: RefreshInput) => {
    const [error, result] = await promiseHandler<
      FetchResult<RefreshData>,
      ApolloError
    >(
      client.mutate({
        mutation: REFRESH,
        variables: { input },
      }),
    );

    if (error) {
      setState({ error });
      return undefined;
    }

    refreshAuth(result?.data?.refreshToken as AuthPayload);
    setState({ data: result?.data });
    return result;
  };

  return [fetch, { ...state }];
};

const REFRESH = gql`
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
`;

export type RefreshInput = {
  carteiraId?: string;
  contextoId?: string;
};

export type RefreshData = {
  refreshToken: AuthPayload;
};
