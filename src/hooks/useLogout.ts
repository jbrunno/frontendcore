import { UserAccount } from '@/types';
import { promiseHandler } from '@/utils';
import { ApolloError, FetchResult, gql } from '@apollo/client';
import { useSelector } from '@xstate/react';
import { useGlobalServices } from './useGlobalServices';
import useObjectState from './useObjectState';
import { useApiClient } from './useApiClient';
import { useAuth } from './useAuth';

export const useLogout = (): [
  () => Promise<
    FetchResult<LogoutData, Record<string, any>> | null | undefined
  >,
  {
    data: LogoutData | null;
    error?: ApolloError | undefined;
  },
] => {
  const { logout } = useAuth();
  const { stateService } = useGlobalServices();
  const loginURL = useSelector(
    stateService,
    ({ context }) => context.data?.loginURL as string,
  );
  const client = useApiClient({ bffURL: loginURL });
  const [state, setState] = useObjectState<{
    data: LogoutData | null;
    error?: ApolloError;
  }>({ data: null, error: undefined });

  const fetch = async () => {
    const [error, result] = await promiseHandler<
      FetchResult<LogoutData>,
      ApolloError
    >(
      client.mutate({
        mutation: LOGOUT,
        variables: { input: { clientMutationId: null } },
      }),
    );

    if (error) {
      setState({ error });
      return undefined;
    }
    logout();
    setState({ data: result?.data });
    return result;
  };

  return [fetch, { ...state }];
};

const LOGOUT = gql`
  mutation Logout($input: LogoutInput!) {
    logout(input: $input) {
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

export type LogoutInput = {
  clientMutationId: string | null;
};

export type LogoutData = {
  usuario: UserAccount;
};
