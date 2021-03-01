import { createContext, useContext } from 'react';

import {
  ActiveFilter,
  CompareFn,
  DataGridStateType,
  FilterFn,
  Row,
} from 'types/datagrid.type';
import { compareStrings } from '../helper/dataGrid.helper';

export type DataGridContextType = {
  dataGridState: DataGridStateType;
  setDataGridState: (dataGridState: DataGridStateType) => void;
  getComputedRows: () => Row[];
  setFilter: (dataKey: string, filterValue: string, filterFn: FilterFn) => void;
  getActiveFilters: () => ActiveFilter[];
  setSort: (dataKey: string, sortFn: CompareFn) => void;
};

export const DataGridContext = createContext<DataGridContextType>({
  dataGridState: {
    columns: [],
    rows: [],
    activeFilters: [],
    activeSort: {
      dataKey: '',
      direction: 'NONE',
      sortFn: compareStrings,
    },
  },
  // eslint-disable-next-line no-console
  setDataGridState: () => console.warn('No provider found'),
  getComputedRows: () => [],
  // eslint-disable-next-line no-console
  setFilter: () => console.warn('No provider found'),
  getActiveFilters: () => [],
  setSort: () => console.warn('No provider found'),
});

export const useDataGridState = () => useContext(DataGridContext);
