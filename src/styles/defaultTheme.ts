import { ThemeOptions } from '@mui/material/styles';

export const defaultTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4A31FF',
      light: '#B29CFF',
      dark: '#2025EF',
      50: '#F1E8FF',
      100: '#D5C2FF',
      200: '#B29CFF',
      300: '#8F76F1',
      400: '#6C50FF',
      500: '#4A31FF',
      600: '#372FFB',
      700: '#2025EF',
      800: '#0020E8',
      900: '#0B20AD',
      A100: '#AE8BFF',
      A200: '#6B55FF',
      A400: '#5035FF',
      A700: '#4726FD',
      '4p': '#4a31ff0a',
      '8p': '#4a31ff14',
      '12p': '#4a31ff1f',
      '30p': '#4a31ff4d',
      '50p': '#4a31ff80',
    },
    secondary: {
      main: '#9C27B0',
      light: '#ce93d8',
      dark: '#7B1FA2',
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c',
      A100: '#ea80fc',
      A200: '#e040fb',
      A400: '#d500f9',
      A700: '#aa00ff',
      '4p': '#9c27b00a',
      '8p': '#9c27b014',
      '12p': '#9c27b01f',
      '30p': '#9c27b04d',
      '50p': '#9c27b080',
    },
    success: {
      main: '#4CAF50',
      light: '#a5d6a7',
      dark: '#388e3c',
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4CAF50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      A100: '#b9f6ca',
      A200: '#71EFAC',
      A400: '#00e676',
      A700: '#00c853',
      '4p': '#2e7d320a',
      '8p': '#2e7d3214',
      '12p': '#2e7d321f',
      '30p': '#2e7d324d',
      '50p': '#2e7d3280',
    },
    error: {
      main: '#F44336',
      light: '#ef9a9a',
      dark: '#d32f2f',
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#F44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000',
      '4p': '#d32f2f0a',
      '8p': '#d32f2f14',
      '12p': '#d32f2f1f',
      '30p': '#d32f2f4d',
      '50p': '#d32f2f80',
    },
    warning: {
      main: '#FF9800',
      light: '#ffcc80',
      dark: '#f57c00',
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#FF9800',
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
      A100: '#ffd180',
      A200: '#ffab40',
      A400: '#ff9100',
      A700: '#ff6d00',
      '4p': '#ed6c020a',
      '8p': '#ed6c0214',
      '12p': '#ed6c021f',
      '30p': '#ed6c024d',
      '50p': '#ed6c0280',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    info: {
      main: '#2196F3',
      dark: '#0b79d0',
      light: '#64b6f7',
      '4p': '#0288d10a',
      '8p': '#0288d114',
      '12p': '#0288d11f',
      '30p': '#0288d14d',
      '50p': '#0288d180',
      '160p': 'linear-gradient(0deg, #00000099, #00000099), #0288D1',
      '190p': 'linear-gradient(0deg, #ffffffe6, #ffffffe6), #0288D1;',
    },
    text: {
      primary: '#3B3B41DE',
      secondary: '#3B3B4199',
      disabled: '#3B3B4161',
    },
    divider: '#0000001F',
    action: {
      active: '#0000008A',
      hover: '#0000000A',
      selected: '#00000014',
      disabled: '#00000042',
      disabledBackground: '#0000001F',
      focus: '#0000001F',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: '3rem',
      letterSpacing: '-0.0938rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: '2.4375rem',
      letterSpacing: '-0.0313rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.8125rem',
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: '1.1875rem',
      letterSpacing: '0.0156rem',
    },
    h5: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.3125rem',
      letterSpacing: '0.0094rem',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.0094rem',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.3125rem',
      letterSpacing: '0.0063rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.0094rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.0094rem',
    },
    buttonLarge: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.0288rem',
    },
    buttonMedium: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.025rem',
    },
    buttonSmall: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.375rem',
      letterSpacing: '0.0275rem',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.0106rem',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.0106rem',
    },
    avatarLetter: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.0106rem',
    },
    inputLabel: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.0106rem',
    },
    helperText: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.025rem',
    },
    inputText: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.0094rem',
    },
    tooltip: {
      fontWeight: 500,
      fontSize: '0.625rem',
      lineHeight: '0.875rem',
      letterSpacing: 0,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '0.625rem',
          lineHeight: '0.875rem',
          letterSpacing: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          overflow: 'visible',
          borderRadius: '0.5rem',
          boxShadow:
            '0px 2px 4px -1px rgba(233, 233, 233, 0.8), 0px 4px 5px rgba(233, 233, 233, 0.14), 0px 1px 10px rgba(233, 233, 233, 0.12)',
        },
      },
    },
  },
  fn: {
    size: (size: number, unit = 'rem') =>
      `calc(${(size / 16) * 0.7}${unit} + ${size * 0.3}px)`,
    fontSize: (size: number, unit = 'rem') => `${size / 16}${unit}`,
    spacing: <Space = number | string>(
      ...spaces: [Space, Space?, Space?, Space?]
    ) =>
      `${spaces
        .map((space) =>
          Number.isNaN(Number(space)) ? space : `${Number(space) / 16}rem`,
        )
        .join(' ')}`,
  },
  spacing: (factor: number) => `${factor / 2}rem`,
};
