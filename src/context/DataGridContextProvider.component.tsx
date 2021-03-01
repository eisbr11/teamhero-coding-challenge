import React, { useEffect } from 'react';

import {
  ActiveFilter,
  ColConfig,
  CompareFn,
  DataGridStateType, FilterFn,
  Row,
} from 'types/datagrid.type';
import { uniqueFilters } from 'helper/dataGrid.helper';
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
  };

  const [dataGridState, setDataGridState] = React.useState(defaultDataGridState);

  useEffect(() => {
    setDataGridState((() => (
      {
        columns,
        rows,
        activeFilters: [],
      }
    )));
  }, []);

  const sortRows = (dataKey: string, compareFn: CompareFn) => {
    setDataGridState(((prevState) => {
      const sortedRows = prevState.rows.sort(compareFn);
      return (
        {
          ...prevState,
          rows: sortedRows,
        }
      );
    }));
  };

  /*
 * example filter
  const activeFilters = [
    {
      dataKey: 'lastName',
      filterValue: 'X',
      filterFn: (
        cellValue: string,
        filterValue: string,
      ): boolean => cellValue.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()),
    },
  ];
 */

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
      return (
        {
          ...prevState,
          activeFilters: uniqueFilters(activeFilters, 'dataKey'),
        }
      );
    }));
  };

  const getComputedRows = (): Row[] => {
    const rawRows = dataGridState.rows;

    let computedRows: Row[] = rawRows;

    dataGridState.activeFilters.forEach((activeFilter) => {
      computedRows = computedRows.filter(
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
      sortRows,
      getComputedRows,
      setFilter,
    }}
    >
      {children}
    </DataGridContext.Provider>
  );
};

export default DataGridContextProvider;
