import { createMachine } from 'xstate';
import { assign } from 'xstate/lib/actions';
import { localCache } from '@/helpers';
import { AUTH_STORAGE_KEY } from '@/constants';

export interface AuthMachineContext {
  authToken: string;
}

export const authMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./authMachine.typegen').Typegen0,
    schema: {
      context: {} as AuthMachineContext,
      events: {} as
        | { type: 'REFRESH_TOKEN'; auth?: AuthMachineContext }
        | { type: 'LOG_IN'; auth?: AuthMachineContext }
        | { type: 'LOG_OUT' },
    },
    id: 'authMachine',
    initial: 'idle',
    states: {
      idle: {
        invoke: {
          src: 'getPersistedAuth',
        },

        on: {
          LOG_IN: 'loggedIn',
        },
      },
      loggedIn: {
        entry: 'handleAuthData',
        on: {
          REFRESH_TOKEN: {
            actions: 'handleAuthData',
          },
          LOG_OUT: 'loggedOut',
        },
      },
      loggedOut: {
        entry: 'removeAuthData',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleAuthData: assign((ctx, { auth }, meta) => {
        if (meta._event.origin) return { ...auth };

        const newContext = { ...ctx, ...auth };

        localCache.set(AUTH_STORAGE_KEY, newContext);

        return newContext;
      }),
      removeAuthData: assign(() => {
        localCache.remove(AUTH_STORAGE_KEY);

        return {};
      }),
    },
    services: {
      getPersistedAuth: () => (send) => {
        const auth = localCache.get(
          AUTH_STORAGE_KEY,
        ) as unknown as AuthMachineContext;
        if (auth) send({ type: 'LOG_IN', auth: { ...auth } });
      },
    },
  },
);
