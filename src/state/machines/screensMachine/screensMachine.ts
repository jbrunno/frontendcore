import { localCache } from '@/helpers';
import { createMachine, assign } from 'xstate';
import { SCREEN_PERMISSIONS_STORAGE_KEY } from '@/constants';

export interface ScreensMachineContext
  extends Record<
    string,
    {
      data?: Record<string, any>;
      permissions: Array<string>;
    }
  > {}

export const screensMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./screensMachine.typegen').Typegen0,
    schema: {
      context: {} as ScreensMachineContext,
      events: {} as
        | { type: 'SET_SCREENS_DATA'; screens: ScreensMachineContext }
        | { type: 'UPDATE_SCREENS_DATA'; screens: ScreensMachineContext }
        | { type: 'REMOVE_SCREENS_DATA' },
    },
    id: 'screensMachine',
    initial: 'idle',
    states: {
      idle: {
        invoke: {
          src: 'getPersistedScreens',
        },
        on: {
          SET_SCREENS_DATA: 'screensDataDefined',
        },
      },
      screensDataDefined: {
        entry: 'handleScreensData',
        on: {
          UPDATE_SCREENS_DATA: {
            actions: 'handleScreensData',
          },
          REMOVE_SCREENS_DATA: 'screensDataRemoved',
        },
      },
      screensDataRemoved: {
        always: {
          actions: 'removeScreensData',
          target: 'idle',
        },
      },
    },
  },
  {
    actions: {
      handleScreensData: assign((context, { screens }, meta) => {
        if (meta._event.origin) return { ...screens };

        const newContext = { ...context, ...screens };

        localCache.set(SCREEN_PERMISSIONS_STORAGE_KEY, newContext);
        return newContext;
      }),
      removeScreensData: assign(() => {
        localCache.remove(SCREEN_PERMISSIONS_STORAGE_KEY);

        return {};
      }),
    },
    services: {
      getPersistedScreens: () => (send) => {
        const screens = localCache.get(
          SCREEN_PERMISSIONS_STORAGE_KEY,
        ) as ScreensMachineContext;

        if (screens)
          send({ type: 'SET_SCREENS_DATA', screens: { ...screens } });
      },
    },
  },
);
