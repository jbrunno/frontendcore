import React from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridRowsProp as MuiGridRowsProp,
  GridColDef as MuiGridColDef,
} from '@mui/x-data-grid';

export type DataGridProps = MuiDataGridProps;
export type GridRowsProp = MuiGridRowsProp;
export type GridColDef = MuiGridColDef;

export function DataGrid(props: DataGridProps) {
  return <MuiDataGrid {...props} />;
}

export default DataGrid;
