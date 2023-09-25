// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPersistedAccount: 'done.invoke.accountMachine.idle:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    handleAccountData: 'SET_ACCOUNT';
    removeAccountData: 'REMOVE_ACCOUNT';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getPersistedAccount: '' | 'xstate.init';
  };
  matchesStates: 'definedAccountData' | 'idle' | 'removedAccountData';
  tags: never;
}
