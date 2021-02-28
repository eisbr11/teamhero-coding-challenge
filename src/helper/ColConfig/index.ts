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
  flexGrow = 0,
  sortFn,
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
    hide,
    align,
    width,
  };
};

export default createColConfig;
