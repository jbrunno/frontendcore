import React from 'react';
import { render } from '@test-utils/component-testing';
import { DataGrid, GridColDef, GridRowsProp } from './DataGrid';

test('renders the DataGrid', () => {
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
  const { container } = render(<DataGrid rows={rows} columns={columns} />);
  expect(container).toMatchSnapshot();
});
