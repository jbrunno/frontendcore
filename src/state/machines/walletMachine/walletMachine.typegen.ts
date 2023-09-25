// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPersistedWallets: 'done.invoke.walletsMachine.idle:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    handleWalletsData: 'SET_WALLETS_CONTEXT' | 'UPDATE_WALLETS_CONTEXT';
    removeWalletsData: '';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getPersistedWallets: '' | 'xstate.init';
  };
  matchesStates: 'idle' | 'walletsDataDefined' | 'walletsDataRemoved';
  tags: never;
}
