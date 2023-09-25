import {
  DocumentNode,
  LazyQueryHookOptions,
  OperationVariables,
  QueryResult,
  TypedDocumentNode,
  useLazyQuery as apolloLazyQuery,
} from '@apollo/client';

type Options<TData, TVariables> = Partial<
  Omit<LazyQueryHookOptions<TData, TVariables>, 'variables'>
>;

export const useLazyQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: LazyQueryHookOptions<TData, TVariables>,
): [
  (input: TVariables, options?: Options<TData, TVariables>) => Promise<TData>,
  QueryResult<TData, TVariables>,
] => {
  const [lazyQuery, { ...result }] = apolloLazyQuery(query, options);

  const fetch = async (
    input: TVariables,
    options?: Options<TData, TVariables>,
  ): Promise<TData> =>
    new Promise((resolve, reject) => {
      lazyQuery({
        variables: {
          ...input,
        },
        ...options,
        onCompleted: (data) => {
          if (options?.onCompleted) options.onCompleted(data);

          resolve(data);
        },
        onError: (error) => {
          if (options?.onError) options.onError(error);

          reject(error);
        },
      });
    });

  return [fetch, { ...result }];
};
