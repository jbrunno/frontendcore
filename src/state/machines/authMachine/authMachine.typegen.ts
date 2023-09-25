// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPersistedAuth: 'done.invoke.authMachine.idle:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    handleAuthData: 'LOG_IN' | 'REFRESH_TOKENS';
    removeAuthData: 'LOG_OUT';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getPersistedAuth: '' | 'xstate.init';
  };
  matchesStates: 'idle' | 'loggedIn' | 'loggedOut';
  tags: never;
}
