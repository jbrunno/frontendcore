import { ChildrenProp } from '@/types';
import { ThemeProvider as InternalThemeProvider } from '@/styles';
import { useCurrentTheme } from '@/hooks/useCurrentTheme';

export function ThemeProvider({ children }: ChildrenProp) {
  const currentTheme = useCurrentTheme();

  return (
    <InternalThemeProvider theme={currentTheme}>
      {children}
    </InternalThemeProvider>
  );
}
