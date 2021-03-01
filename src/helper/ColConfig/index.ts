import {
  Alignment,
  ColConfig,
  CompareFn, FilterFn, FilterType,
  Row,
} from 'types/datagrid.type';
import { compareStrings, filterByString } from 'helper/dataGrid.helper';

const createColConfig = ({
  dataKey,
  label,
  valueGetter,
  sortable = true,
  flexGrow = 0,
  sortFn = compareStrings,
  filterable = false,
  filterFn = filterByString,
  filterType = 'text',
  hide = false,
  align = 'left',
  width = 150,
}: {
  dataKey: string;
  label: string;
  valueGetter?: (row: Row, key: string) => React.ReactNode;
  sortable?: boolean,
  flexGrow?: number,
  sortFn?: CompareFn,
  filterable?: boolean,
  filterFn?: FilterFn,
  filterType?: FilterType,
  hide?: boolean,
  align?: Alignment,
  width?: number,
}): ColConfig => {
  const defaultValueGetter = (row: Row, key: string) => row[key];
  const configValueGetter = valueGetter || defaultValueGetter;
  return {
    dataKey,
    label,
    valueGetter: configValueGetter,
    sortable,
    flexGrow,
    sortFn,
    filterable,
    filterFn,
    filterType,
    hide,
    align,
    width,
  };
};

export default createColConfig;
