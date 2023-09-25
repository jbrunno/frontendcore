import { createMachine, assign } from 'xstate';

export interface ConfigMachineContext {
  APP_NAME?: string;
  ENV?: string;
  __DEV__?: boolean;
  __PROD__?: boolean;

  BFF_GRAPHQL_URL?: string;
  BFF_GRAPHQL_WS_URL?: string;
  BFF_STORAGE_API_URL?: string;

  USE_WEBSOCKET: number;

  APM_URL?: string;

  HOTJAR_ID?: string;
  HOTJAR_SNIPPET_VERSION?: string;
}

export const configMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./configMachine.typegen').Typegen0,
    schema: {
      context: {} as ConfigMachineContext,
      events: {} as
        | { type: 'SET_CONFIG'; config?: ConfigMachineContext }
        | { type: 'CHANGE_CONFIG'; config?: ConfigMachineContext }
        | { type: 'REMOVE_CONFIG' },
    },
    id: 'configMachine',
    initial: 'idle',
    states: {
      idle: {
        on: {
          SET_CONFIG: 'definedConfig',
        },
      },
      definedConfig: {
        entry: 'handleConfig',
        on: {
          CHANGE_CONFIG: {
            actions: 'handleConfig',
          },
          REMOVE_CONFIG: 'removedConfig',
        },
      },
      removedConfig: {
        entry: 'removeConfig',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleConfig: assign((ctx, { config }) => ({ ...ctx, ...config })),
      removeConfig: assign(() => ({})),
    },
  },
);
