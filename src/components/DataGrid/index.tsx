import React from 'react';

import { ColConfig, GridConfig, Row } from 'types/datagrid.type';
import DataGridContextProvider from 'context/DataGridContextProvider.component';
import Table from './components/Table';

const DataGrid = ({
  rows,
  columns,
  gridConfig,
}: {
  rows: Row[],
  columns: ColConfig[],
  gridConfig: GridConfig,
}) => (
  <DataGridContextProvider columns={columns} rows={rows}>
    <Table gridConfig={gridConfig} />
  </DataGridContextProvider>
);

export default DataGrid;
