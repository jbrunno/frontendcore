import { useSelector } from '@xstate/react';
import { generatePath as routerGeneratePath } from 'react-router-dom';
import { ObjectLiteral } from '../types';
import { useGlobalServices } from './useGlobalServices';

export type Params = {
  params?: ObjectLiteral<string, any>;
  query?: ObjectLiteral;
};

export function generatePathQuery(query: NonNullable<Params['query']>) {
  return Object.keys(query).reduce((queryString, key) => {
    return queryString
      ? `${queryString}&${key}=${query[key]}`
      : `${key}=${query[key]}`;
  }, '');
}

export function useGeneratePath(inputRoute: string, inContext = true) {
  const { accountService } = useGlobalServices();

  const contexto = useSelector(
    accountService,
    (state) => state.context.contexto,
  );

  const route =
    inContext && contexto
      ? `/${contexto.nome.toLocaleLowerCase()}/${inputRoute}`
      : inputRoute;

  return (params: Params['params'], query?: Params['query']) => {
    if (query) {
      return `${routerGeneratePath(route, params)}?${generatePathQuery(query)}`;
    }
    return routerGeneratePath(route, params);
  };
}
