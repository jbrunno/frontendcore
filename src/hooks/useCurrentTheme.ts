import { createTheme, ThemeOptions } from '@/styles';
import { useSelector } from '@xstate/react';
import * as Themes from '@/styles';
import { useGlobalServices } from '@/hooks/useGlobalServices';

export const useCurrentTheme = () => {
  const { themeService } = useGlobalServices();

  const themeMode = useSelector(
    themeService,
    ({ context }) => context.currentTheme,
  );

  const currentTheme = Themes[`${themeMode}Theme` as keyof typeof Themes];

  return createTheme(currentTheme as ThemeOptions);
};
