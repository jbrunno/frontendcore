import { useSelector } from '@xstate/react';
import {
  generatePath as routerGeneratePath,
  useNavigate,
} from 'react-router-dom';
import { ObjectLiteral } from '../types';
import { generatePathQuery, Params } from './useGeneratePath';
import { useGlobalServices } from './useGlobalServices';

type Options<T extends ObjectLiteral> = Params & {
  state?: T;
  replace?: boolean;
};

function generatePath(
  route: string,
  params: Params['params'],
  query: Params['query'],
) {
  if (query) {
    return `${routerGeneratePath(route, params)}?${generatePathQuery(query)}`;
  }
  return routerGeneratePath(route, params);
}

export const useRoute = <T extends ObjectLiteral>(
  inputRoute: string,
  params?: Params,
  inContext = true,
) => {
  const { accountService } = useGlobalServices();

  const contexto = useSelector(
    accountService,
    (state) => state.context.contexto,
  );

  const route =
    inContext && contexto
      ? `/${contexto.nome.toLocaleLowerCase()}/${inputRoute}`
      : inputRoute;

  const navigate = useNavigate();

  const path = generatePath(route, params?.params, params?.query);

  function open(options: Options<T> = {}) {
    if (options.params || options.query) {
      navigate(generatePath(route, options.params, options.query), {
        state: options.state,
        replace: options.replace,
      });
    } else {
      navigate(path, { state: options.state, replace: options.replace });
    }
  }

  return {
    route: path,
    open,
  };
};
