import { ActiveFilter, CellContent, FilterFn } from 'types/datagrid.type';

/**
 * make Active Filters unique by key
 *
 * @param data
 * @param key
 */
const uniqueFilters = (data: ActiveFilter[], key: string = 'dataKey'): ActiveFilter[] => {
  const map = new Map();

  data.forEach((item: any) => {
    map.set(item[key], item);
  });

  return Array.from(map.values());
};

/**
 * filter function for filtering by string compare
 *
 * @param cellValue
 * @param filterValue
 */
const filterByString: FilterFn = (
  cellValue: CellContent,
  filterValue: string,
): boolean => {
  if (filterValue.length === 0) {
    return true;
  }
  return typeof cellValue === 'string' ? (
    cellValue?.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
    : true;
};

export { uniqueFilters, filterByString };
