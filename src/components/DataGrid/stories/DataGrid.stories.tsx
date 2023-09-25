import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DataGrid, GridColDef, GridRowsProp } from '../DataGrid';
import { Grid } from '../../Grid/Grid';

export default {
  id: 'datagrid',
  title: 'Mui X/DataGrid',
  component: DataGrid,
} as ComponentMeta<typeof DataGrid>;

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World', col3: '!' },
  { id: 2, col1: 'DataGrid', col2: 'is Awesome', col3: '!!' },
  { id: 3, col1: 'MUI', col2: 'is Amazing', col3: '!!!' },
];

const columns: Array<GridColDef> = [
  { field: 'col1', headerName: 'Column 1', flex: 1 },
  { field: 'col2', headerName: 'Column 2', flex: 1 },
  { field: 'col3', headerName: 'Column 3', flex: 1 },
];

export function Default(props: ComponentStory<typeof DataGrid>) {
  return (
    <Grid width="100%">
      <DataGrid autoHeight rows={rows} columns={columns} {...props} />;
    </Grid>
  );
}
