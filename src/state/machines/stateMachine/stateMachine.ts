import { ObjectLiteral } from '@/types';
import { createMachine, assign } from 'xstate';

export interface StateMachineContext {
  actions?: ObjectLiteral<string, (...args: any[]) => any>;
  data?: ObjectLiteral;
}

export const stateMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./stateMachine.typegen').Typegen0,
    schema: {
      context: {} as StateMachineContext,
      events: {} as
        | { type: 'SET_STATE'; state?: StateMachineContext }
        | { type: 'CHANGE_STATE'; state?: StateMachineContext }
        | { type: 'REMOVE_STATE' },
    },
    id: 'stateMachine',
    initial: 'idle',
    states: {
      idle: {
        on: {
          SET_STATE: 'definedState',
        },
      },
      definedState: {
        entry: 'handleState',
        on: {
          CHANGE_STATE: {
            actions: 'handleState',
          },
          REMOVE_STATE: 'removedState',
        },
      },
      removedState: {
        entry: 'removeState',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleState: assign((ctx, { state }) => ({ ...ctx, ...state })),
      removeState: assign(() => ({})),
    },
  },
);
