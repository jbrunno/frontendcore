import { InMemoryCacheConfig } from '@apollo/client';
import { createMachine, assign } from 'xstate';

export interface CacheMachineContext extends InMemoryCacheConfig {}

export const cacheMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./cacheMachine.typegen').Typegen0,
    schema: {
      context: {} as CacheMachineContext,
      events: {} as
        | { type: 'SET_CACHE'; cache?: CacheMachineContext }
        | { type: 'CHANGE_CACHE'; cache?: CacheMachineContext }
        | { type: 'REMOVE_CACHE' },
    },
    id: 'cacheMachine',
    initial: 'idle',
    states: {
      idle: {
        on: {
          SET_CACHE: 'definedCache',
        },
      },
      definedCache: {
        entry: 'handleCache',
        on: {
          CHANGE_CACHE: {
            actions: 'handleCache',
          },
          REMOVE_CACHE: 'removedCache',
        },
      },
      removedCache: {
        entry: 'removeCache',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleCache: assign((ctx, { cache }) => ({ ...ctx, ...cache })),
      removeCache: assign(() => ({})),
    },
  },
);
