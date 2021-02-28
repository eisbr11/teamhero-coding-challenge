import { createContext, useContext } from 'react';

import { DataGridStateType } from 'types/datagrid.type';

export type DataGridContextType = {
  dataGridState: DataGridStateType;
  setDataGridState: (dataGridState: DataGridStateType) => void;
};

export const DataGridContext = createContext<DataGridContextType>({
  dataGridState: {
    columns: [],
    rows: [],
  },
  // eslint-disable-next-line no-console
  setDataGridState: () => console.warn('No provider found'),
});

export const useDataGridState = () => useContext(DataGridContext);
