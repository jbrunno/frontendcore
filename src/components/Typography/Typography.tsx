import React, { ElementType } from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

export type TypographyProps = MuiTypographyProps & {
  component?: ElementType;
};

export function Typography(props: TypographyProps) {
  return <MuiTypography {...props} />;
}

export default Typography;
