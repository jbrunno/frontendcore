import { THEME_STORAGE_KEY } from '@/constants';
import { localCache } from '@/helpers';
import { createMachine, assign } from 'xstate';

type CurrentThemeType = 'default' | 'dark';
export interface ThemeMachineContext {
  currentTheme?: CurrentThemeType;
}

export const themeMachine = createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import('./themeMachine.typegen').Typegen0,
    schema: {
      context: {} as ThemeMachineContext,
      events: {} as
        | { type: 'SET_THEME'; theme?: ThemeMachineContext }
        | { type: 'CHANGE_THEME'; theme?: ThemeMachineContext }
        | { type: 'REMOVE_THEME' },
    },
    id: 'themeMachine',
    initial: 'idle',
    context: {
      currentTheme: 'default',
    },
    states: {
      idle: {
        invoke: {
          src: 'getPersistedTheme',
        },
        on: {
          SET_THEME: 'definedTheme',
        },
      },
      definedTheme: {
        entry: 'handleTheme',
        on: {
          CHANGE_THEME: {
            actions: 'handleTheme',
          },
          REMOVE_THEME: 'removedTheme',
        },
      },
      removedTheme: {
        entry: 'removeTheme',
        always: 'idle',
      },
    },
  },
  {
    actions: {
      handleTheme: assign((ctx, { theme }, meta) => {
        if (meta._event.origin) return { ...theme };

        const currentTheme = theme?.currentTheme || ctx.currentTheme;
        localCache.set(THEME_STORAGE_KEY, currentTheme);

        return { currentTheme };
      }),
      removeTheme: assign(() => {
        localCache.remove(THEME_STORAGE_KEY);
        return {};
      }),
    },
    services: {
      getPersistedTheme: () => async (send) => {
        const currentTheme = localCache.get(
          THEME_STORAGE_KEY,
        ) as CurrentThemeType;

        if (currentTheme) send({ type: 'SET_THEME', theme: { currentTheme } });
      },
    },
  },
);
