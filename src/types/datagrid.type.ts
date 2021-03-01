import { Skill } from './contacts.type';

/**
 * Alignment for Cell content.
 */
export declare type Alignment = 'left' | 'right' | 'center';

export type DataType = 'string' | 'tags' | 'boolean' | 'number' | 'hidden';

export type Row = {
  [key: string]: number | string | Skill[];
};

export interface GridConfig {
  /**
   * if true, the head column of the grid is hidden
   */
  hideHead: boolean;
  /**
   * if true, shows the filter options above the table
   * @default false
   */
  showFilters: boolean;
}

export interface ColConfig {
  /**
   * the key of the field, used to map to the row data
   */
  dataKey: string;
  /**
   * the title of the column, shown in the column header
   */
  label: string;
  /**
   * function that returns a React Component for showing the data
   * @param row
   * @param dataKey
   */
  valueGetter: (row: Row, dataKey: string) => React.ReactNode;
  /**
   * the width of the cell
   */
  width: number;
  /**
   * if true, the column can be sorted
   * @default false
   */
  sortable?: boolean;
  /**
   * the compare function, for sorting the column
   */
  sortFn: CompareFn;
  /**
   * check if a column can be filtered
   * @default false
   */
  filterable: boolean;
  /**
   * a filter function
   */
  filterFn: FilterFn;
  /**
   * this defines, how the filters should be entered
   * @default 'string'
   */
  filterType: FilterType;
  /**
   * the flex grow value for the column
   */
  flexGrow?: number;
  /**
   * if true, the column will be hidden
   */
  hide?: boolean;
  /**
   * horizontal alignment of the cell
   */
  align?: Alignment;
}

/**
 * Compare Function for sorting
 */
export declare type CompareFn = (
  val1: CellContent,
  val2: CellContent,
) => number;

export declare type FilterFn = (
  cellValue: CellContent,
  filterValue: string,
) => boolean;

export declare type ActiveFilter = {
  dataKey: string;
  filterValue: string;
  filterFn: FilterFn;
};

export declare type FilterType = 'text' | 'tag';

/**
 * The cell value type.
 */
export declare type CellContent = string | number | boolean | null | undefined | object;

export type DataGridStateType = {

  columns: ColConfig[];

  rows: Row[],

  activeFilters: ActiveFilter[];
};
