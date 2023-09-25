import React, { ElementType } from 'react';
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from '@mui/material';

export type ContainerProps = MuiContainerProps & {
  component?: ElementType;
};

export function Container(props: ContainerProps) {
  return <MuiContainer {...props} />;
}

export default Container;
