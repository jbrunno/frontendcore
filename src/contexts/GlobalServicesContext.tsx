import { Context, createContext, useMemo } from 'react';
import { useInterpret } from '@xstate/react';
import { ChildrenProp } from '@/types';
import { InterpreterFrom } from 'xstate';
import {
  accountMachine,
  authMachine,
  cacheMachine,
  configMachine,
  screensMachine,
  stateMachine,
  themeMachine,
  walletsMachine,
} from '@/state';
import { GLOBAL_CONTEXT_KEY } from '@/constants';

interface GlobalServicesContextType {
  accountService: InterpreterFrom<typeof accountMachine>;
  authService: InterpreterFrom<typeof authMachine>;
  cacheService: InterpreterFrom<typeof cacheMachine>;
  configService: InterpreterFrom<typeof configMachine>;
  screensService: InterpreterFrom<typeof screensMachine>;
  stateService: InterpreterFrom<typeof stateMachine>;
  themeService: InterpreterFrom<typeof themeMachine>;
  walletsService: InterpreterFrom<typeof walletsMachine>;
}

export function getGlobalServicesContext(): Context<GlobalServicesContextType> {
  let context = (createContext as any)[
    GLOBAL_CONTEXT_KEY
  ] as Context<GlobalServicesContextType>;
  if (!context) {
    Object.defineProperty(createContext, GLOBAL_CONTEXT_KEY, {
      value: (context = createContext<GlobalServicesContextType>(
        {} as GlobalServicesContextType,
      )),
      enumerable: false,
      writable: false,
      configurable: true,
    });
    context.displayName = 'GlobalServicesContext';
  }
  return context;
}

export function GlobalServicesProvider({ children }: ChildrenProp) {
  const GlobalServicesContext = getGlobalServicesContext();

  const accountService = useInterpret(accountMachine);
  const authService = useInterpret(authMachine);
  const cacheService = useInterpret(cacheMachine);
  const configService = useInterpret(configMachine);
  const screensService = useInterpret(screensMachine);
  const stateService = useInterpret(stateMachine);
  const themeService = useInterpret(themeMachine);
  const walletsService = useInterpret(walletsMachine);

  const services = useMemo(
    () => ({
      accountService,
      authService,
      cacheService,
      configService,
      screensService,
      stateService,
      themeService,
      walletsService,
    }),
    [
      accountService,
      cacheService,
      authService,
      configService,
      screensService,
      stateService,
      themeService,
      walletsService,
    ],
  );

  return (
    <GlobalServicesContext.Provider value={services}>
      {children}
    </GlobalServicesContext.Provider>
  );
}
