import { createContext, useContext } from 'react';

import {
  CompareFn,
  DataGridStateType,
  FilterFn,
  Row,
} from 'types/datagrid.type';

export type DataGridContextType = {
  dataGridState: DataGridStateType;
  setDataGridState: (dataGridState: DataGridStateType) => void;
  sortRows: (dataKey: string, compareFn: CompareFn) => void;
  getComputedRows: () => Row[];
  setFilter: (dataKey: string, filterValue: string, filterFn: FilterFn) => void;
};

export const DataGridContext = createContext<DataGridContextType>({
  dataGridState: {
    columns: [],
    rows: [],
    activeFilters: [],
  },
  // eslint-disable-next-line no-console
  setDataGridState: () => console.warn('No provider found'),
  // eslint-disable-next-line no-console
  sortRows: () => console.warn('No provider found'),
  getComputedRows: () => [],
  // eslint-disable-next-line no-console
  setFilter: () => console.warn('No provider found'),
});

export const useDataGridState = () => useContext(DataGridContext);
