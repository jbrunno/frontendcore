// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPersistedTheme: 'done.invoke.themeMachine.idle:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    handleTheme: 'CHANGE_THEME' | 'SET_THEME';
    removeTheme: 'REMOVE_THEME';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getPersistedTheme: '' | 'xstate.init';
  };
  matchesStates: 'definedTheme' | 'idle' | 'removedTheme';
  tags: never;
}
