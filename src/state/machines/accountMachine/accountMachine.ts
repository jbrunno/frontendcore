import { UserAccount } from '@/types';
import { localCache } from '@/helpers';
import { createMachine, assign } from 'xstate';
import { ACCOUNT_STORAGE_KEY } from '@/constants';

export interface AccountMachineContext extends UserAccount {}

export const accountMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./accountMachine.typegen').Typegen0,
    schema: {
      context: {} as AccountMachineContext,
      events: {} as
        | { type: 'SET_ACCOUNT'; account?: AccountMachineContext }
        | { type: 'UPDATE_ACCOUNT'; account?: AccountMachineContext }
        | { type: 'REMOVE_ACCOUNT' },
    },
    id: 'accountMachine',
    initial: 'idle',
    states: {
      idle: {
        invoke: {
          src: 'getPersistedAccount',
        },
        on: {
          SET_ACCOUNT: 'definedAccountData',
        },
      },
      definedAccountData: {
        entry: 'handleAccountData',
        on: {
          UPDATE_ACCOUNT: {
            actions: 'handleAccountData',
          },
          REMOVE_ACCOUNT: 'removedAccountData',
        },
      },
      removedAccountData: {
        entry: 'removeAccountData',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleAccountData: assign((ctx, { account }, meta) => {
        if (meta._event.origin) return { ...account };

        const newContext = { ...ctx, ...account };

        localCache.set(ACCOUNT_STORAGE_KEY, newContext);

        return newContext;
      }),
      removeAccountData: assign(() => {
        localCache.remove(ACCOUNT_STORAGE_KEY);

        return {};
      }),
    },
    services: {
      getPersistedAccount: () => (send) => {
        const account = localCache.get(
          ACCOUNT_STORAGE_KEY,
        ) as unknown as AccountMachineContext;

        if (account) send({ type: 'SET_ACCOUNT', account });
      },
    },
  },
);
