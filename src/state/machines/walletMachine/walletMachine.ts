import { localCache } from '@/helpers';
import { createMachine, assign } from 'xstate';
import { WALLET_PERMISSIONS_STORAGE_KEY } from '@/constants';
import { ObjectLiteral } from '@/types';

export interface WalletsMachineContext
  extends ObjectLiteral<
    string,
    {
      data?: ObjectLiteral<string, any>;
      permissions: Array<string>;
    }
  > {}

export const walletsMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./walletMachine.typegen').Typegen0,
    schema: {
      context: {} as WalletsMachineContext,
      events: {} as
        | { type: 'SET_WALLETS_CONTEXT'; context: WalletsMachineContext }
        | { type: 'UPDATE_WALLETS_CONTEXT'; context: WalletsMachineContext }
        | { type: 'REMOVE_WALLETS_CONTEXT' },
    },
    id: 'walletsMachine',
    initial: 'idle',
    states: {
      idle: {
        invoke: {
          src: 'getPersistedWallets',
        },
        on: {
          SET_WALLETS_CONTEXT: 'walletsDataDefined',
        },
      },
      walletsDataDefined: {
        entry: 'handleWalletsData',
        on: {
          UPDATE_WALLETS_CONTEXT: {
            actions: 'handleWalletsData',
          },
          REMOVE_WALLETS_CONTEXT: 'walletsDataRemoved',
        },
      },
      walletsDataRemoved: {
        always: {
          actions: 'removeWalletsData',
          target: 'idle',
        },
      },
    },
  },
  {
    actions: {
      handleWalletsData: assign((ctx, { context }, meta) => {
        if (meta._event.origin) return { ...context };

        const newContext = { ...ctx, ...context };

        localCache.set(WALLET_PERMISSIONS_STORAGE_KEY, newContext);
        return newContext;
      }),
      removeWalletsData: assign(() => {
        localCache.remove(WALLET_PERMISSIONS_STORAGE_KEY);

        return {};
      }),
    },
    services: {
      getPersistedWallets: () => (send) => {
        const context = localCache.get(
          WALLET_PERMISSIONS_STORAGE_KEY,
        ) as unknown as WalletsMachineContext;

        if (context)
          send({ type: 'SET_WALLETS_CONTEXT', context: { ...context } });
      },
    },
  },
);
