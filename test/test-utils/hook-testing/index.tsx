import { RenderOptions } from '@testing-library/react';
import { createTheme, defaultTheme, ThemeProvider } from '@/styles';
import { MemoryRouter } from 'react-router';
import { renderHook } from '@testing-library/react-hooks';
import { ApiProvider, GlobalServicesProvider } from '@/contexts';
import { ChildrenProp } from '@/types';
import { mockApiClient } from '../api-testing';

function RenderWrapper<T>(props: T) {
  const theme = createTheme(defaultTheme);

  return (
    <GlobalServicesProvider>
      <ApiProvider client={mockApiClient}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            {(props as unknown as ChildrenProp).children}
          </ThemeProvider>
        </MemoryRouter>
      </ApiProvider>
    </GlobalServicesProvider>
  );
}

const renderHookWithProviders = <Props, Result>(
  callback: (initialProps: Props) => Result,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  renderHook<Props, Result>(callback, {
    wrapper: RenderWrapper,
    ...options,
  });

export { default as userEvent } from '@testing-library/user-event';
export * from '@testing-library/react-hooks';
export { renderHookWithProviders as renderHook };
