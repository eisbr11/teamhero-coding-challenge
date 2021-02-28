import {
  Alignment,
  ColConfig,
  CompareFn,
  Row,
} from 'types/datagrid.type';

const createColConfig = ({
  dataKey,
  label,
  valueGetter,
  sortable = false,
  flexGrow = 1.0,
  sortFn,
  hide = false,
  align = 'left',
}: {
  dataKey: string;
  label: string;
  valueGetter?: (row: Row, key: string) => React.ReactNode;
  sortable?: boolean,
  flexGrow?: number,
  sortFn?: CompareFn,
  hide?: boolean,
  align?: Alignment,
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
    hide,
    align,
  };
};

export default createColConfig;
