// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    getPersistedScreens: 'done.invoke.screensMachine.idle:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    handleScreensData: 'SET_SCREENS_DATA' | 'UPDATE_SCREENS_DATA';
    removeScreensData: '';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getPersistedScreens: '' | 'xstate.init';
  };
  matchesStates: 'idle' | 'screensDataDefined' | 'screensDataRemoved';
  tags: never;
}
