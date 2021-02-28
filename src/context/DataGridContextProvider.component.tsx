import React, { useEffect } from 'react';

import { ColConfig, DataGridStateType, Row } from 'types/datagrid.type';
import { DataGridContext } from './dataGrid.context';

/**
 * The DataGrid Context Provider Wrapper
 *
 * @param {*} children
 * @param {ColConfig[]} columns
 * @param {Row[]} rows
 * @returns {JSX}
 * @constructor
 */
const DataGridContextProvider = ({
  children,
  columns,
  rows,
}: {
  children: React.ReactNode,
  columns: ColConfig[],
  rows: Row[],
}) => {
  const defaultDataGridState: DataGridStateType = {
    columns: [],
    rows: [],
  };

  const [dataGridState, setDataGridState] = React.useState(defaultDataGridState);

  useEffect(() => {
    setDataGridState((() => (
      {
        columns,
        rows,
      }
    )));
  }, []);

  return (
    <DataGridContext.Provider value={{ dataGridState, setDataGridState }}>
      {children}
    </DataGridContext.Provider>
  );
};

export default DataGridContextProvider;
