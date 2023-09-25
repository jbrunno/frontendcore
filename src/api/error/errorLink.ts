import { onError } from '@apollo/client/link/error';

export const createErrorLink = () =>
  onError(({ graphQLErrors, networkError, operation }) => {
    /* eslint-disable no-console */
    if (networkError) {
      console.groupCollapsed('[Network Error]');
      console.log(networkError);
      console.log(operation);
      console.groupEnd();
    }

    if (graphQLErrors) {
      console.groupCollapsed('[GraphQL Errors]');
      graphQLErrors.map(console.log);
      console.groupEnd();
    }
    /* eslint-enable no-console */
  });
