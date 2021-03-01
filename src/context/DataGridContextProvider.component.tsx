import React, { useEffect } from 'react';

import {
  ActiveFilter,
  ColConfig,
  CompareFn,
  DataGridStateType, FilterFn,
  Row, SortDirection,
} from 'types/datagrid.type';
import {
  compareStrings,
  sortRows,
  uniqueFilters,
  updateSortDirectionFromOldValue,
} from 'helper/dataGrid.helper';
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
    activeFilters: [],
    activeSort: {
      dataKey: '',
      direction: 'NONE',
      sortFn: compareStrings,
    },
  };

  const [dataGridState, setDataGridState] = React.useState(defaultDataGridState);

  useEffect(() => {
    setDataGridState(((prevState) => (
      {
        ...prevState,
        columns,
        rows,
        activeFilters: [],
      }
    )));
  }, []);

  const setSort = (dataKey: string, sortFn: CompareFn) => {
    setDataGridState((prevState) => {
      let updatedDirection: SortDirection = 'ASC';
      if (prevState.activeSort.dataKey !== dataKey) {
        updatedDirection = 'ASC';
      } else {
        updatedDirection = updateSortDirectionFromOldValue(prevState.activeSort.direction);
      }
      const activeSort = {
        dataKey,
        direction: updatedDirection,
        sortFn,
      };

      return {
        ...prevState,
        activeSort,
      };
    });
  };

  const setFilter = (dataKey: string, filterValue: string, filterFn: FilterFn) => {
    setDataGridState(((prevState) => {
      const activeFilters: ActiveFilter[] = [
        ...prevState.activeFilters,
        {
          dataKey,
          filterValue,
          filterFn,
        },
      ];
      return {
        ...prevState,
        activeFilters: uniqueFilters(activeFilters, 'dataKey'),
      };
    }));
  };

  const getActiveFilters = (): ActiveFilter[] => dataGridState.activeFilters;

  const getComputedRows = (): Row[] => {
    const rawRows = dataGridState.rows;

    //  sort raw rows
    const sortedRows: Row[] = sortRows(rawRows.slice(), dataGridState.activeSort);
    let computedRows: Row[] = sortedRows.slice();

    // filtering by active filters
    dataGridState.activeFilters.forEach((activeFilter) => {
      computedRows = sortedRows.filter(
        (row) => activeFilter.filterFn(
          row[activeFilter.dataKey] as string,
          activeFilter.filterValue,
        ),
      );
    });

    return computedRows;
  };

  return (
    <DataGridContext.Provider value={{
      dataGridState,
      setDataGridState,
      getComputedRows,
      setFilter,
      getActiveFilters,
      setSort,
    }}
    >
      {children}
    </DataGridContext.Provider>
  );
};

export default DataGridContextProvider;
