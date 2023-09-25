import {
  ApolloClient,
  ApolloProvider as ApolloCtx,
  NormalizedCacheObject,
} from '@apollo/client';
import { useApiClient } from '@/hooks/useApiClient';
import { PropsWithChildren } from '@/types';

export function ApiProvider({
  client,
  children,
}: PropsWithChildren<{ client?: ApolloClient<NormalizedCacheObject> }>) {
  const apiClient = client || useApiClient();

  return <ApolloCtx client={apiClient}>{children}</ApolloCtx>;
}
