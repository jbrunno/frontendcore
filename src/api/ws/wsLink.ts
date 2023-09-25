import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

export const createWSLink = (url: string, authToken?: string) => {
  const wsClient = createClient({
    url,
    connectionParams: {
      authorization: authToken ? `Bearer ${authToken}` : null,
    },
    retryAttempts: 10,
  });

  return new GraphQLWsLink(wsClient);
};
