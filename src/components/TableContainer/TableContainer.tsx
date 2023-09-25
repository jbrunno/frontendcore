import React, { ElementType } from 'react';
import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
} from '@mui/material';

/*
https://mui.com/material-ui/guides/composition/#with-typescript
componente recebe internamente um OverridableComponent fazendo 
com que apenas a exportação das props não exporte os dados por completo, 
sendo necessário aplicar as props de OverridableComponent novamente
*/
export type TableContainerProps = MuiTableContainerProps & {
  component?: ElementType;
};

export function TableContainer(props: TableContainerProps) {
  return <MuiTableContainer {...props} />;
}
export default TableContainer;
