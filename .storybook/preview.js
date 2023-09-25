import React from 'react';
import { GlobalServicesProvider } from '@/contexts';
import { MemoryRouter } from 'react-router';
import { withThemes } from '@react-theming/storybook-addon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import { darkTheme, defaultTheme } from '../src/styles';
import { CssBaseline } from '@mui/material';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muiTheme = createTheme({
    ...serialTheme,
    spacing: defaultTheme.spacing,
    fn: defaultTheme.fn,
  });

  return (
    <GlobalServicesProvider>
      <MemoryRouter>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MemoryRouter>
    </GlobalServicesProvider>
  );
};

const onThemeSwitch = (context) => {
  const { theme } = context;
  const background = theme.palette.background.default;
  const parameters = {
    backgrounds: {
      default: background,
    },
  };
  return {
    parameters,
  };
};

export const decorators = [
  withThemes(null, [createTheme(defaultTheme), createTheme(darkTheme)], {
    providerFn,
    onThemeSwitch,
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: {
      order: ['@CRM', '*', 'Component API'],
    },
  },
};
