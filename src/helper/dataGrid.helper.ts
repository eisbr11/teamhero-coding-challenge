import {
  ActiveFilter, ActiveSort,
  CellContent,
  CompareFn,
  FilterFn, Row,
  SortDirection,
} from 'types/datagrid.type';
import { Skill } from '../types/contacts.type';

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

/**
 * filter function for filtering by tags
 *
 * @param cellValue
 * @param filterValue
 */
const filterByTags: FilterFn = (
  cellValue: CellContent,
  filterValue: string,
): boolean => {
  if (filterValue.length === 0) {
    return true;
  }
  const skills = cellValue as Skill[];

  const flatSkills = skills.map((skill) => skill.type);

  return flatSkills.includes(filterValue);
};

/**
 * compare Function for two strings
 */
const compareStrings: CompareFn = ((val1, val2) => {
  if (val1 && val2) {
    if (val1 < val2) {
      return -1;
    }
    if (val1 > val2) {
      return 1;
    }
  }
  return 0;
});

/**
 * update the sort direction Key depending on the old key
 */
const updateSortDirectionFromOldValue = ((oldDirection: SortDirection): SortDirection => {
  switch (oldDirection) {
    case 'NONE':
      return 'ASC';
    case 'ASC':
      return 'DESC';
    case 'DESC':
      return 'NONE';
    default:
      return 'ASC';
  }
});

const sortRows = (rows: Row[], activeSort: ActiveSort): Row[] => {
  switch (activeSort.direction) {
    case 'ASC':
      return rows.sort((a: Row, b: Row) => activeSort.sortFn(
        a[activeSort.dataKey], b[activeSort.dataKey],
      ));
    case 'DESC':
      return rows.sort((a: Row, b: Row) => activeSort.sortFn(
        a[activeSort.dataKey], b[activeSort.dataKey],
      )).reverse();
    default:
      return rows;
  }
};

export {
  uniqueFilters,
  filterByString,
  filterByTags,
  compareStrings,
  updateSortDirectionFromOldValue,
  sortRows,
};
