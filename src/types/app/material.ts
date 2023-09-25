import { PaletteColor } from '@mui/material/styles';

export type MaterialColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type MaterialColorVariant = keyof PaletteColor;
